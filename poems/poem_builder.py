#!/usr/bin/env python3
"""
Build src/poems.json from files in poems/poem_source.

Each poem file:
- Title: filename without extension
- Date: first line of the file
- Content: remaining lines (preserve newlines)

Output: src/poems.json -> [{"title": "...", "date": "...", "content": "..."}]
"""
import os
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]  # repository root
SOURCE_DIR = ROOT / "poems" / "poem_source"
OUTPUT_FILE = ROOT / "src" / "poems.json"

def build_poems(source_dir: Path):
    poems = []
    if not source_dir.exists():
        print(f"No source directory found at {source_dir}")
        return poems

    for p in sorted(source_dir.iterdir()):
        if p.is_file():
            title = p.stem
            try:
                text = p.read_text(encoding="utf-8")
            except Exception as e:
                print(f"Skipping {p.name}: could not read ({e})")
                continue
            lines = text.splitlines()

            # Skip files that begin with "WIP" (first non-empty line starts with WIP)
            first_nonempty = ""
            for ln in lines:
                if ln.strip():
                    first_nonempty = ln.strip()
                    break
            if first_nonempty.upper().startswith("WIP"):
                print(f"Skipping {p.name}: marked WIP")
                continue

            if len(lines) == 0:
                date = ""
                content = ""
            else:
                date = lines[0].strip()
                content = "\n".join(lines[1:]).lstrip("\n")
            poems.append({
                "title": title,
                "date": date,
                "content": content
            })
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