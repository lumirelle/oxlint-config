import type { OxlintConfig } from 'oxlint'
import { javascript as _javascript } from '@antfu/eslint-config'
import { getConfig } from '../utils'

const JS_RULES_FILTERING_REG = /^(?:antfu|unused-import)/
const JS_RULES_NO_INTEND_SUPPORT_LIST = ['no-dupe-args', 'no-octal', 'no-octal-escape', 'no-undef-init']
const JS_RULES_CURRENTLY_NOT_SUPPORTED_LIST = ['no-restricted-properties', 'no-restricted-syntax', 'no-unreachable-loop', 'one-var', 'prefer-arrow-callback', 'prefer-regex-literals']

export async function javascript(): Promise<OxlintConfig> {
  const configItems = await _javascript()
  const rules: any = getConfig(configItems, 'antfu/javascript/rules').rules ?? {}
  for (const key in rules) {
    if (JS_RULES_FILTERING_REG.test(key))
      delete rules[key]
    if (JS_RULES_NO_INTEND_SUPPORT_LIST.includes(key))
      // No intend to support by oxlint, see
      // https://github.com/oxc-project/oxc/issues/479
      delete rules[key]
    if (JS_RULES_CURRENTLY_NOT_SUPPORTED_LIST.includes(key))
      // Currently does not supported by oxlint, see
      // https://github.com/oxc-project/oxc/issues/479
      delete rules[key]
    if (key === 'object-shorthand')
      // This rule is supported by oxlint, but oxlint 1.58.0 complains
      // `Rule 'object-shorthand' not found in plugin 'eslint'`
      delete rules[key]
  }
  return {
    plugins: ['eslint'],
    rules,
  }
}
