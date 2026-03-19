import type { OxlintConfig } from 'oxlint'
import { javascript as _javascript } from '@antfu/eslint-config'
import { getConfig } from '../utils'

const JS_RULES_FILTERING_REG = /^(?:antfu|unused-import)/

export async function javascript(): Promise<OxlintConfig> {
  const configItems = await _javascript()
  const rules: any = getConfig(configItems, 'antfu/javascript/rules').rules ?? {}
  for (const key in rules) {
    if (JS_RULES_FILTERING_REG.test(key))
      delete rules[key]
  }
  return {
    plugins: ['eslint'],
    rules,
  }
}
