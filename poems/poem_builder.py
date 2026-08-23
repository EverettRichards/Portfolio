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
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).resolve().parents[1]  # repository root
SOURCE_DIR = ROOT / "poems" / "poem_source"
OUTPUT_FILE = ROOT / "src" / "poems.json"
PUBLIC_PDF_DIR = ROOT / "public" / "poems"

# Candidate input formats for dates found in txt first-lines
_DATE_FORMATS = [
    "%Y-%m-%d",
    "%m/%d/%y",
    "%m/%d/%Y",
    "%Y/%m/%d",
    "%B %d, %Y",
    "%b %d, %Y",
]

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
            # For PDFs use file modification time as date and copy into public/poems
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