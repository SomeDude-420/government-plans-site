#!/usr/bin/env python3
"""
Tiny live-reload web server for this site. No installs needed.

Run it:
    python3 dev-server.py

Then open the address it prints. When any file in this folder changes,
your browser refreshes by itself. Press Ctrl+C to stop.

This file is only for working on the site. It does not change the site
itself, so you can still open index.html directly or upload the folder.
"""

import http.server
import json
import os
import socketserver
import threading
import time

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(os.environ.get("PORT", "8000"))

SKIP_DIRS = {".git", "node_modules", "__pycache__", ".venv", "venv"}
SKIP_EXT = {".pyc", ".log", ".swp"}

version = 1
version_lock = threading.Lock()

RELOAD_SNIPPET = """
<script>
/* added by dev-server.py — not part of the real site */
(function () {
  var current = null;
  function check() {
    fetch('/__version', { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (current === null) { current = data.v; return; }
        if (data.v !== current) { location.reload(); }
      })
      .catch(function () { /* server restarting, ignore */ });
  }
  setInterval(check, 800);
})();
</script>
"""


def snapshot():
    stamp = {}
    for base, dirs, names in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS and not d.startswith(".")]
        for name in names:
            if os.path.splitext(name)[1] in SKIP_EXT:
                continue
            path = os.path.join(base, name)
            try:
                stamp[path] = os.path.getmtime(path)
            except OSError:
                pass
    return stamp


def watch():
    global version
    last = snapshot()
    while True:
        time.sleep(0.5)
        now = snapshot()
        if now != last:
            last = now
            with version_lock:
                version += 1


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, fmt, *args):
        # Keep the terminal quiet except for real problems.
        if args and str(args[1]) not in ("200", "304"):
            super().log_message(fmt, *args)

    def do_GET(self):
        if self.path.split("?")[0] == "/__version":
            with version_lock:
                body = json.dumps({"v": version}).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)
            return

        path = self.translate_path(self.path.split("?")[0])
        if path.endswith(".html") and os.path.isfile(path):
            with open(path, encoding="utf-8") as handle:
                html = handle.read()
            if "</body>" in html:
                html = html.replace("</body>", RELOAD_SNIPPET + "</body>")
            else:
                html += RELOAD_SNIPPET
            body = html.encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)
            return

        super().do_GET()

    def end_headers(self):
        if self.path.endswith((".css", ".js")):
            self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def handle_one_request(self):
        try:
            super().handle_one_request()
        except (BrokenPipeError, ConnectionResetError):
            self.close_connection = True


class Server(socketserver.ThreadingTCPServer):
    daemon_threads = True
    allow_reuse_address = True


def main():
    threading.Thread(target=watch, daemon=True).start()

    port = PORT
    for _ in range(20):
        try:
            httpd = Server(("127.0.0.1", port), Handler)
            break
        except OSError:
            port += 1
    else:
        print("Could not find a free port.")
        return

    print()
    print("  Simple Plans is running with live reload")
    print("  Open this in your browser:  http://127.0.0.1:%d" % port)
    print("  Pages: /  and  /find.html  and  /plan.html?plan=pm-kisan")
    print("  Press Ctrl+C to stop.")
    print()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
