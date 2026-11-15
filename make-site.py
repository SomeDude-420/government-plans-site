#!/usr/bin/env python3
"""
Copies only the files the website needs into a folder called "site".

Why: the rest of this folder is for working (dev server, git, README).
The "site" folder is exactly what you upload to Netlify or GitHub Pages.

Run it again after any change:
    python3 make-site.py
"""

import os
import shutil

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "site")

ITEMS = [
    "index.html",
    "plan.html",
    "find.html",
    "css",
    "js",
]


def main():
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    os.makedirs(OUT)

    for item in ITEMS:
        source = os.path.join(ROOT, item)
        target = os.path.join(OUT, item)
        if os.path.isdir(source):
            shutil.copytree(source, target)
        else:
            shutil.copy2(source, target)

    count = 0
    for base, _, names in os.walk(OUT):
        count += len(names)

    print("Ready: %d files copied into ./site" % count)
    print("Upload the folder: %s" % OUT)


if __name__ == "__main__":
    main()
