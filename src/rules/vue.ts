import type { OxlintConfig } from 'oxlint'
import { vue as _vue, renamePluginInConfigs } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function vue(): Promise<OxlintConfig> {
  const configItems = renamePluginInConfigs(await _vue(), { ts: 'typescript' })
  const globals: any = getConfig(configItems, 'antfu/vue/setup').languageOptions?.globals
  const rules: any = getConfig(configItems, 'antfu/vue/rules').rules
  for (const key in rules) {
    if (key.startsWith('antfu'))
      delete rules[key]
  }
  return {
    plugins: [],
    overrides: [
      {
        files: ['**/*.vue'],
        plugins: ['vue'],
        globals,
        rules,
      },
    ],
  }
}
