# Lumirelle's OxLint Config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

Lumirelle's opinionated _OxLint_ config for _JavaScript_ / _TypeScript_ / _Vue_ projects, generated based on [@antfu/eslint-config](https://github.com/antfu/eslint-config).

## Configuration

There are now only JSON (static) configs, one for JavaScript / TypeScript projects and one for Vue projects.

> [!Note]
>
> In the future, we may support dynamic configs (e.g. JavaScript / TypeScript configs) to allow more flexible configurations, in order to migrate from _ESLint_ + `@antfu/eslint-config` to _OxLint_ + `@lumirelle/oxlint-config` more smoothly.

### [`@lumirelle/oxlint-config/ts`](.oxlintrc.ts.json)

For JavaScript / TypeScript projects, it uses plugins below:

<table><tbody>

<tr><th valign="top">

Plugins

</th><th valign="top">

Description

</th></tr>

<tr><td valign="top">

`eslint`

</td><td valign="top">

Used by [JavaScript rules](internal/rules/javascript.json). These rules are generated based on [@antfu/eslint-config's JavaScript rules](https://github.com/antfu/eslint-config/blob/main/src/configs/javascript.ts) with default options.

</td></tr>

<tr><td valign="top">

`oxc`

</td><td valign="top">

Used by [Oxc rules](internal/rules/oxc.json). These rules are configured [in this package](src/rules/oxc.ts).

</td></tr>

<tr><td valign="top">

`unicorn`

</td><td valign="top">

Used by [Unicorn rules](internal/rules/unicorn.json). These rules are generated based on [@antfu/eslint-config's Unicorn rules](https://github.com/antfu/eslint-config/blob/main/src/configs/unicorn.ts) with default options.

</td></tr>

<tr><td valign="top">

`import`

</td><td valign="top">

Used by [Imports (Don't forget the "s") rules](internal/rules/imports.json). These rules are generated based on [@antfu/eslint-config's Imports rules](https://github.com/antfu/eslint-config/blob/main/src/configs/imports.ts) with default options.

Because of the differences between plugin implementations (OxLint's built-in `import` plugin are compatible with [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import), but `@antfu/eslint-config` uses [eslint-plugin-import-lite](https://github.com/9romise/eslint-plugin-import-lite)), there are [some transformations when generating rules](src/rules/imports.ts#L12).

</td></tr>

<tr><td valign="top">

`promise`

</td><td valign="top">

Used by [Promise rules](internal/rules/promise.json). These rules are configured [in this package](src/rules/promise.ts).

</td></tr>

<tr><td valign="top">

`node`

</td><td valign="top">

Used by [Node rules](internal/rules/node.json). These rules are generated based on [@antfu/eslint-config's Node rules](https://github.com/antfu/eslint-config/blob/main/src/configs/node.ts) with default options.

</td></tr>

<tr><td valign="top">

`jsdoc`

</td><td valign="top">

Used by [JSDoc rules](internal/rules/jsdoc.json). These rules are generated based on [@antfu/eslint-config's JSDoc rules](https://github.com/antfu/eslint-config/blob/main/src/configs/jsdoc.ts) with default options.

</td></tr>

<tr><td valign="top">

`typescript`

</td><td valign="top">

Used by [TypeScript rules](internal/rules/typescript.json). These rules are generated based on [@antfu/eslint-config's TypeScript rules](https://github.com/antfu/eslint-config/blob/main/src/configs/typescript.ts) with default options.

</td></tr>

</tbody></table>

### [`@lumirelle/oxlint-config/vue`](.oxlintrc.vue.json)

For Vue projects, it extends the `@lumirelle/oxlint-config/ts` preset, uses the additional `vue` plugin.

<table><tbody>

<tr><th valign="top">

Plugin

</th><th valign="top">

Description

</th></tr>

<tr><td valign="top">

`vue`

</td><td valign="top">

Used by [Vue rules](internal/rules/vue.json), which are generated based on [@antfu/eslint-config's Vue rules](https://github.com/antfu/eslint-config/blob/main/src/configs/vue.ts) with default options.

</td></tr>

</tbody></table>

## Usage

1. Install the package with OxLint, `oxlint-tsgolint` is required for type-aware rules:

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
     "extends": ["./node_modules/@lumirelle/oxlint-config/.oxlintrc.   ts.json"],
     // Enable type-aware rules.
     "options": {
       "typeAware": true
     },
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

   For vue projects:

   ```json
   {
     "$schema": "./node_modules/oxlint/configuration_schema.json",
     // what a pity that oxlint doesn't support scope packages in "extends" field now, so we have to use the full path to the config file.
     // see https://github.com/oxc-project/oxc/issues/15538
     // "extends": ["@lumirelle/oxlint-config/vue"],
     "extends": ["./node_modules/@lumirelle/oxlint-config/.oxlintrc.vue.json"],
     // enable type-aware rules.
     "options": {
       "typeaware": true
     },
     // must specify the environment by youself, because "extends" does not apply to "env".
     // custom as your need.
     "env": {
       "builtin": true,
       "es2026": true,
       "browser": true,
       "node": true
     }
   }
   ```

3. Run oxlint cli:

   ```bash
   # with bunx
   bunx oxlint --type-aware --type-check
   # with npx
   npx oxlint --type-aware --type-check
   # ...
   ```

4. (Optional) Add lint scripts to `package.json`:

   ```json
   {
     "scripts": {
       "lint": "oxlint",
       "lint:fix": "oxlint --fix"
     }
   }
   ```

   And run them with:

   ```bash
   # with bun
   bun run lint
   # with npm
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
