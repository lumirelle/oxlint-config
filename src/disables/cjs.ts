import type { OxlintConfig } from 'oxlint'
import { disables as _disables, renamePluginInConfigs } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function cjs(): Promise<OxlintConfig> {
  const configItems = renamePluginInConfigs(await _disables(), { ts: 'typescript' })
  const config: any = getConfig(configItems, 'antfu/disables/cjs')?.rules ?? {}
  for (const key in config) {
    if (key.startsWith('antfu/'))
      delete config[key]
  }
  return {
    plugins: [],
    overrides: [
      {
        files: [
          '**/*.{,c}js',
        ],
        plugins: ['typescript'],
        rules: config,
      },
    ],
  }
}
