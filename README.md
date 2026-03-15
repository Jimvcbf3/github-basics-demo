# GitHub Basics Demo

This is a tiny practice project for learning:

- Git basics
- GitHub repositories
- Pull requests
- GitHub Actions CI
- GitHub Pages CD
- Manual approval before production deployment

## Run locally

```powershell
npm start
npm test
npm run build
```

## Files to notice

- `src/greet.js`: the code
- `test/run-tests.js`: the tests
- `scripts/build-site.js`: the build step
- `.github/workflows/ci.yml`: the CI/CD workflow

## Suggested practice

1. Change the greeting text.
2. Run `npm test`.
3. Commit your change.
4. Push to GitHub.
5. Open a pull request.
6. Watch CI pass or fail.
7. Push to `main` and watch GitHub Pages deploy.
