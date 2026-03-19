import type { OxlintConfig } from 'oxlint'
import { imports as _imports } from '@antfu/eslint-config'
import { getConfig } from '../utils'

/**
 * Although `@antfu/eslint-config` uses `eslint-plugin-import-lite`, and `OxLint` implements based on `eslint-plugin-import`,
 * the rules of `eslint-plugin-import-lite` are mostly a subset of `eslint-plugin-import`, so we can still use the rules of `eslint-plugin-import-lite` in `OxLint`.
 */
export async function imports(): Promise<OxlintConfig> {
  const configItems = await _imports()
  const rules: any = getConfig(configItems, 'antfu/imports/rules').rules ?? {}
  for (const key in rules) {
    if (key.startsWith('antfu'))
      delete rules[key]
    else if (key === 'import/consistent-type-specifier-style')
    // Plugin `eslint-plugin-import-lite` rename `prefer-top-level` to `top-level`,
    // see https://github.com/9romise/eslint-plugin-import-lite/blob/main/src/rules/consistent-type-specifier-style/README.md
      rules[key] = ['error', 'prefer-top-level']
  }
  return {
    plugins: ['import'],
    rules,
  }
}
