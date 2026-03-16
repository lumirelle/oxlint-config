# Lumirelle's OxLint Config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

Lumirelle's opinionated OxLint config for JavaScript / TypeScript / Vue projects.

## Usage

1. Install the package with OxLint:

```bash
# @antfu/ni
ni -D @lumirelle/oxlint-config oxlint oxlint-tsgolint
# Bun
bun add -d @lumirelle/oxlint-config oxlint oxlint-tsgolint
# NPM
npm install -D @lumirelle/oxlint-config oxlint oxlint-tsgolint
# ...
```

2. Extend the config in your `.oxlintrc`:

For TypeScript projects:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": ["@lumirelle/oxlint-config/ts"],
  // Must specify the environment, custom as your need.
  "env": {
    "node": true
  }
}
```

For Vue projects:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": ["@lumirelle/oxlint-config/vue"],
  // Must specify the environment, custom as your need.
  "env": {
    "node": true,
    "browser": true
  }
}
```

3. Run OxLint CLI:

```bash
# With bunx
bunx oxlint --type-aware --type-check
# With npx
npx oxlint --type-aware --type-check
# ...
```

4. (Optional) Add lint scripts to `package.json`:

```json
{
  "scripts": {
    "lint": "oxlint --type-aware --type-check",
    "lint:fix": "oxlint --type-aware --type-check --fix"
  }
}
```

And run them with:

```bash
# With bun
bun run lint
# With npm
npm run lint
# ...
```

## Work with ESLint

If you want to migrate an existing project from totally ESLint to OxLint first & ESLint least, you can use [eslint-plugin-oxlint](https://github.com/oxc-project/eslint-plugin-oxlint) as below in your ESLint config:

```js
import oxlint from 'eslint-plugin-oxlint'

export default [
  // ...
  ...oxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
]
```

Please refer to the [ESLint config of this repository](eslint.config.js) for more details.

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/lumirelle/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/lumirelle/static/sponsors.svg' alt='Sponsors'/>
  </a>
</p>

## License

[MIT](./LICENSE.md) License © [Lumirelle](https://github.com/Lumirelle)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@lumirelle/oxlint-config?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/@lumirelle/oxlint-config
[npm-downloads-src]: https://img.shields.io/npm/dm/@lumirelle/oxlint-config?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/@lumirelle/oxlint-config
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@lumirelle/oxlint-config?style=flat&colorA=18181B&colorB=F0DB4F&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@lumirelle/oxlint-config
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=18181B&colorB=F0DB4F
[jsdocs-href]: https://www.jsdocs.io/package/@lumirelle/oxlint-config
[codecov-src]: https://img.shields.io/codecov/c/gh/lumirelle/oxlint-config/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/lumirelle/oxlint-config
[license-src]: https://img.shields.io/github/license/lumirelle/oxlint-config.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/lumirelle/oxlint-config/blob/main/LICENSE.md
