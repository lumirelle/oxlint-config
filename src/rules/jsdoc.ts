import type { OxlintConfig } from 'oxlint'
import { jsdoc as _jsdoc } from '@antfu/eslint-config'
import { getConfig } from '../utils'

const JSDOC_RULES_CURRENTLY_NOT_SUPPORTED_LIST = ['jsdoc/check-alignment', 'jsdoc/check-param-names', 'jsdoc/check-types', 'jsdoc/multiline-blocks', 'jsdoc/no-multi-asterisks', 'jsdoc/require-returns-check', 'jsdoc/require-yields-check']

export async function jsdoc(): Promise<OxlintConfig> {
  const configItems = await _jsdoc()
  const rules: any = getConfig(configItems, 'antfu/jsdoc/rules').rules ?? {}
  for (const key in rules) {
    if (JSDOC_RULES_CURRENTLY_NOT_SUPPORTED_LIST.includes(key))
      // Currently does not supported by oxlint, see
      // https://github.com/oxc-project/oxc/issues/1170
      delete rules[key]
  }
  return {
    plugins: [],
    overrides: [
      {
        files: ['**/*.{,c,m}[jt]s{,x}'],
        plugins: ['jsdoc'],
        rules,
      },
    ],
  }
}
