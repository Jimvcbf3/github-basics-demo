const fs = require("node:fs");
const path = require("node:path");
const { greet } = require("../src/greet");

const outputDir = path.join(__dirname, "..", "site");
const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GitHub Basics Demo</title>
    <style>
      :root {
        color-scheme: light;
        font-family: "Segoe UI", sans-serif;
      }

      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background:
          radial-gradient(circle at top, #dbeafe, transparent 45%),
          linear-gradient(135deg, #f8fafc, #e2e8f0);
        color: #0f172a;
      }

      main {
        width: min(42rem, calc(100vw - 3rem));
        padding: 3rem;
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0 24px 60px rgba(15, 23, 42, 0.16);
      }

      h1 {
        margin: 0 0 1rem;
        font-size: clamp(2rem, 5vw, 3.5rem);
      }

      p {
        font-size: 1.1rem;
        line-height: 1.6;
      }

      code {
        padding: 0.2rem 0.45rem;
        border-radius: 999px;
        background: #dbeafe;
      }
    </style>
  </head>
  <body>
    <main>
      <p><code>GitHub Pages deployment</code></p>
      <h1>${greet("GitHub")}</h1>
      <p>
        This page is built from the repository and deployed automatically
        after the CI test job passes on <code>main</code>.
      </p>
    </main>
  </body>
</html>
`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "index.html"), html);

console.log(`Built site to ${outputDir}`);
