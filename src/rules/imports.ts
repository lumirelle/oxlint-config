import { imports as _imports } from '@antfu/eslint-config'
import { getConfig } from '../utils'

/**
 * Although `@antfu/eslint-config` uses `eslint-plugin-import-lite`, and `OxLint` implements based on `eslint-plugin-import`,
 * the rules of `eslint-plugin-import-lite` are mostly a subset of `eslint-plugin-import`, so we can still use the rules of `eslint-plugin-import-lite` in `OxLint`.
 */
export async function imports(): Promise<any> {
  const configItems = await _imports()
  return getConfig(configItems, 'antfu/imports/rules').rules ?? {}
}
