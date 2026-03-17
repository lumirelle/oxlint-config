# Lumirelle's OxLint Config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

Lumirelle's opinionated OxLint config for JavaScript / TypeScript / Vue projects.

## Configuration

There are now only JSON (static) configs, with two presets for TypeScript and Vue projects:

- `@lumirelle/oxlint-config/ts`: For JavaScript / TypeScript projects, it uses plugins below:
  1. `eslint`:

     Used by [JavaScript rules](internal/rules/javascript.json). These rules are generated based on [@antfu/eslint-config's JavaScript rules](https://github.com/antfu/eslint-config/blob/main/src/configs/javascript.ts) with default options.

  3. `oxc`:

     Used by [Oxc rules](internal/rules/oxc.json). These rules are configured [in this package](src/rules/oxc.ts).

  5. `unicorn`:

     Used by [Unicorn rules](internal/rules/unicorn.json). These rules are generated based on [@antfu/eslint-config's Unicorn rules](https://github.com/antfu/eslint-config/blob/main/src/configs/unicorn.ts) with default options.

  6. `import`:

     Used by [Imports (Don't forget the "s") rules](internal/rules/imports.json). These rules are generated based on [@antfu/eslint-config's Imports rules](https://github.com/antfu/eslint-config/blob/main/src/configs/imports.ts) with default options.

     Because of the differences between plugin implementations (OxLint's built-in `import` plugin are compatible with [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import), but `@antfu/eslint-config` uses [eslint-plugin-import-lite](https://github.com/9romise/eslint-plugin-import-lite)), there are [some transformations when generating rules](src/schema.ts#L65).

  7. `promise`: Used by [Promise rules](internal/rules/promise.json). These rules are configured [in this package](src/rules/promise.ts).
  8.  `node`: Used by [Node rules](internal/rules/node.json). These rules are generated based on [@antfu/eslint-config's Node rules](https://github.com/antfu/eslint-config/blob/main/src/configs/node.ts) with default options.
  9.  `jsdoc`: Used by [JSDoc rules](internal/rules/jsdoc.json). These rules are generated based on [@antfu/eslint-config's JSDoc rules](https://github.com/antfu/eslint-config/blob/main/src/configs/jsdoc.ts) with default options.
  10. `typescript`: Used by [TypeScript rules](internal/rules/typescript.json). These rules are generated based on [@antfu/eslint-config's TypeScript rules](https://github.com/antfu/eslint-config/blob/main/src/configs/typescript.ts) with default options.

- `@lumirelle/oxlint-config/vue`: For Vue projects, it extends the `ts` preset, uses the additional `vue` plugin, and adds [rules for Vue files](internal/rules/vue.json), which are generated based on [@antfu/eslint-config's Vue rules](https://github.com/antfu/eslint-config/blob/main/src/configs/vue.ts) with default options.

> [!Note]
>
> In the future, we may support dynamic configs (e.g. JavaScript / TypeScript configs) to allow more flexible configurations, to align with the behavior of `@antfu/eslint-config`...

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
  // What a pity that OxLint doesn't support scope packages in "extends" field now, so we have to use the full path to the config file.
  // See https://github.com/oxc-project/oxc/issues/15538
  // "extends": ["@lumirelle/oxlint-config/ts"],
  "extends": ["./node_modules/@lumirelle/oxlint-config/.oxlintrc.ts.json"],
  // Must specify the environment by youself, because "extends" does not apply to "env".
  // Custom as your need.
  "env": {
    "builtin": true,
    "es2026": true,
    "browser": true,
    "node": true
  }
}
```

For Vue projects:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  // What a pity that OxLint doesn't support scope packages in "extends" field now, so we have to use the full path to the config file.
  // See https://github.com/oxc-project/oxc/issues/15538
  // "extends": ["@lumirelle/oxlint-config/vue"],
  "extends": ["./node_modules/@lumirelle/oxlint-config/.oxlintrc.vue.json"],
  // Must specify the environment by youself, because "extends" does not apply to "env".
  // Custom as your need.
  "env": {
    "builtin": true,
    "es2026": true,
    "browser": true,
    "node": true
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
