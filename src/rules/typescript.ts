import type { OxlintConfig } from 'oxlint'
import { typescript as _typescript, renamePluginInConfigs } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function typescript(): Promise<OxlintConfig> {
  const configItems = renamePluginInConfigs(await _typescript(), { ts: 'typescript' })
  const rules: any = getConfig(configItems, 'antfu/typescript/rules').rules ?? {}
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
