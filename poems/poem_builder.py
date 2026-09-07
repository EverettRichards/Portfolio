#!/usr/bin/env python3
"""
Build src/poems.json from files in poems/poem_source.

Each poem file:
- Title: filename without extension
- Date: first line of the file (for .txt) or file modification date (for .pdf)
- Content: remaining lines (preserve newlines) for .txt; public path for .pdf
- Type: "text" or "pdf"

PDF files are copied into public/poems so the React dev server serves them as static assets.
Output: src/poems.json -> [{"title": "...", "date": "...", "content": "...", "type":"text|pdf"}]
"""
import json
import re
import shutil
import tempfile
from pathlib import Path
from datetime import datetime

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]  # repository root
SOURCE_DIR = ROOT / "poems" / "poem_source"
OUTPUT_FILE = ROOT / "src" / "poems.json"
PUBLIC_PDF_DIR = ROOT / "public" / "poems"
POEM_MEDIA_DIR = ROOT / "poems" / "poem_media"
PUBLIC_MEDIA_DIR = ROOT / "public" / "poem_media"

# Hard-coded creation dates for PDFs whose filesystem dates are unreliable.
PDF_DATE_OVERRIDES = {
    "Shadow": "5/12/26",
    "The Three-Year Curse": "7/26/26",
    "The Wanderer": "5/20/26",
}

# Candidate input formats for dates found in txt first-lines
_DATE_FORMATS = [
    "%Y-%m-%d",
    "%m/%d/%y",
    "%m/%d/%Y",
    "%Y/%m/%d",
    "%B %d, %Y",
    "%b %d, %Y",
]

MEDIA_EXTENSIONS = {".jpg", ".jpeg", ".png"}
MEDIA_COMPRESSION_THRESHOLD = 500 * 1024
MEDIA_TARGET_SIZE = 250 * 1024

def compress_media_file(media_file: Path):
    """Compress an oversized supported image in place, keeping its filename."""
    if media_file.suffix.lower() not in MEDIA_EXTENSIONS or media_file.stat().st_size <= MEDIA_COMPRESSION_THRESHOLD:
        return

    original_size = media_file.stat().st_size
    candidate_path = None
    best_path = None
    try:
        with Image.open(media_file) as image:
            image.load()
            is_jpeg = media_file.suffix.lower() in {".jpg", ".jpeg"}
            image_format = "JPEG" if is_jpeg else "PNG"
            exif_data = image.info.get("exif")
            metadata_options = {"exif": exif_data} if exif_data else {}

            if is_jpeg:
                if image.mode in {"RGBA", "LA"}:
                    background = Image.new("RGB", image.size, "white")
                    background.paste(image, mask=image.getchannel("A"))
                    source = background
                else:
                    source = image.convert("RGB")
                candidates = [(source, {"quality": quality, "optimize": True, "progressive": True, **metadata_options})
                              for quality in range(85, 15, -5)]
            else:
                source = image.convert("RGBA")
                candidates = [(source, {"optimize": True, "compress_level": 9, **metadata_options})]
                candidates.extend(
                    (source.quantize(colors=colors), {"optimize": True, "compress_level": 9, **metadata_options})
                    for colors in (256, 128, 64, 32)
                )

            with tempfile.NamedTemporaryFile(dir=media_file.parent, suffix=media_file.suffix, delete=False) as temp:
                candidate_path = Path(temp.name)
            with tempfile.NamedTemporaryFile(dir=media_file.parent, suffix=media_file.suffix, delete=False) as best:
                best_path = Path(best.name)

            best_size = original_size
            for candidate, save_options in candidates:
                candidate.save(candidate_path, format=image_format, **save_options)
                candidate_size = candidate_path.stat().st_size
                if candidate_size < best_size:
                    shutil.copyfile(candidate_path, best_path)
                    best_size = candidate_size
                if best_size <= MEDIA_TARGET_SIZE:
                    break

            if best_size < original_size:
                shutil.copyfile(best_path, media_file)
                target_note = " (under 250 KB)" if best_size <= MEDIA_TARGET_SIZE else ""
                print(f"Compressed {media_file.name}: {original_size // 1024} KB -> {best_size // 1024} KB{target_note}")
            else:
                print(f"Could not reduce {media_file.name}; leaving original file unchanged")
    except Exception as e:
        print(f"Failed compressing poem media {media_file.name}: {e}")
    finally:
        for temporary_path in (candidate_path, best_path):
            if temporary_path:
                temporary_path.unlink(missing_ok=True)

def parse_date(s: str):
    s = s.strip()
    if not s:
        return None
    # Try parsing with known formats
    for fmt in _DATE_FORMATS:
        try:
            return datetime.strptime(s, fmt)
        except Exception:
            pass
    # Last resort: try letting datetime parse ISO-ish formats
    try:
        return datetime.fromisoformat(s)
    except Exception:
        return None

def format_date(dt: datetime):
    if not dt:
        return ""
    # Format as "m/d/yy" where year is two digits
    month = dt.month
    day = dt.day
    year2 = dt.year % 100
    return f"{month}/{day}/{year2:02d}"

def extract_text_metadata(lines):
    """
    Extract date/content/favorite metadata from poem text lines.

    Rules:
    - If the first line contains '#favorite', mark poem as favorite.
    - If the first line contains '#stormy', mark poem as stormy.
    - Date still comes from the first logical date line:
      - same first line with supported tags removed, if non-empty
      - otherwise the second line
    """
    if len(lines) == 0:
        return "", "", False, False

    first_line = lines[0].strip()
    first_line_lower = first_line.lower()
    is_favorite = "#favorite" in first_line_lower
    is_stormy = "#stormy" in first_line_lower

    date_line_index = 0
    if is_favorite or is_stormy:
        raw_date = re.sub(r"(?i)#favorite|#stormy", "", first_line).strip()
        if raw_date:
            date_line_index = 0
        else:
            date_line_index = 1
            raw_date = lines[1].strip() if len(lines) > 1 else ""
    else:
        raw_date = first_line

    parsed = parse_date(raw_date)
    date = format_date(parsed) if parsed else raw_date
    content_start = min(date_line_index + 1, len(lines))
    content = "\n".join(lines[content_start:]).lstrip("\n")

    return date, content, is_favorite, is_stormy

def build_poems(source_dir: Path):
    poems = []
    if not source_dir.exists():
        print(f"No source directory found at {source_dir}")
        return poems

    PUBLIC_PDF_DIR.mkdir(parents=True, exist_ok=True)
    if POEM_MEDIA_DIR.exists():
        PUBLIC_MEDIA_DIR.mkdir(parents=True, exist_ok=True)
        for media_file in POEM_MEDIA_DIR.iterdir():
            if media_file.is_file():
                try:
                    compress_media_file(media_file)
                    shutil.copy2(media_file, PUBLIC_MEDIA_DIR / media_file.name)
                except Exception as e:
                    print(f"Failed copying poem media {media_file.name} to public: {e}")

    for p in sorted(source_dir.iterdir()):
        if not p.is_file():
            continue

        # Skip files whose filename begins with "WIP" (case-insensitive)
        if p.name.upper().startswith("WIP"):
            print(f"Skipping {p.name}: filename marked WIP")
            continue

        suffix = p.suffix.lower()
        # Treat files with no extension as text files
        if suffix == "":
            suffix = ".txt"
        title = p.stem

        if suffix == ".txt":
            try:
                text = p.read_text(encoding="utf-8")
            except Exception as e:
                print(f"Skipping {p.name}: could not read ({e})")
                continue
            lines = text.splitlines()

            # Skip files where first non-empty line begins with "WIP"
            first_nonempty = ""
            for ln in lines:
                if ln.strip():
                    first_nonempty = ln.strip()
                    break
            if first_nonempty.upper().startswith("WIP"):
                print(f"Skipping {p.name}: marked WIP in content")
                continue

            date, content, is_favorite, is_stormy = extract_text_metadata(lines)

            poems.append({
                "title": title,
                "date": date,
                "content": content,
                "type": "text",
                "favorite": is_favorite,
                "stormy": is_stormy
            })

        elif suffix == ".pdf":
            # Use a known creation date when available; otherwise use file modification time.
            date = PDF_DATE_OVERRIDES.get(title)
            if not date:
                mtime = p.stat().st_mtime
                dt = datetime.fromtimestamp(mtime)
                date = format_date(dt)
            dest = PUBLIC_PDF_DIR / p.name
            try:
                shutil.copy2(p, dest)
                print(f"Copied PDF {p.name} -> {dest}")
            except Exception as e:
                print(f"Failed copying {p.name} to public: {e}")
            # Public-facing path (served from public/poems)
            rel_path = f"/poems/{p.name}"
            poems.append({
                "title": title,
                "date": date,
                "content": rel_path,
                "type": "pdf",
                "favorite": False,
                "stormy": False
            })
        else:
            # ignore other file types
            continue

    return poems

def write_output(poems, out_file: Path):
    out_file.parent.mkdir(parents=True, exist_ok=True)
    try:
        with out_file.open("w", encoding="utf-8") as f:
            json.dump(poems, f, ensure_ascii=False, indent=2)
        print(f"Wrote {len(poems)} poems to {out_file}")
    except Exception as e:
        print(f"Failed to write {out_file}: {e}")

if __name__ == "__main__":
    poems = build_poems(SOURCE_DIR)
    write_output(poems, OUTPUT_FILE)