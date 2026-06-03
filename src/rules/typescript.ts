import type { OxlintConfig } from 'oxlint'
import { typescript as _typescript, renamePluginInConfigs } from '@antfu/eslint-config'
import { getConfig } from '../utils'

const TS_RULES_NO_INTEND_SUPPORT_LIST = ['no-dupe-args', 'no-new-symbol']

export async function typescript(): Promise<OxlintConfig> {
  const configItems = renamePluginInConfigs(await _typescript(), { ts: 'typescript' })
  const rules: any = getConfig(configItems, 'antfu/typescript/rules').rules ?? {}
  for (const key in rules) {
    if (TS_RULES_NO_INTEND_SUPPORT_LIST.includes(key))
      // No intend to support by oxlint, see
      // https://github.com/oxc-project/oxc/issues/479
      delete rules[key]
  }
  return {
    plugins: [],
    overrides: [
      {
        files: ['**/*.{,c,m}ts', '**/*.{,c,m}tsx', '**/*.vue'],
        plugins: ['typescript'],
        rules,
      },
    ],
  }
}
