# How to run it 🤔?

> Note 💡: Husky will run test scripts before each commit. If tests fail, the commit will be discarded.

> Note 💡: Husky runs `npm run test:staged` which will run tests without watch mode.
> If we'd put `npm test` inside `.husky/pre-commit` file, it would get stuck forever in watch mode.

1. Install packages: `npm i`
2. Run App: `npm start`
3. Run Tests in watch mode: `npm test`
4. Run Tests in CI/CD mode (without watch mode): `npm run test:staged`
5. Update Snapshots through terminal: `npm test -- --updateSnapshot`
6. Update Snapshots when in watch mode: Just hit `u` key when in watch mode
