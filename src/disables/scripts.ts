import type { OxlintConfig } from 'oxlint'
import { disables as _disables, renamePluginInConfigs } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function scripts(): Promise<OxlintConfig> {
  const configItems = renamePluginInConfigs(await _disables(), { ts: 'typescript' })
  const config: any = getConfig(configItems, 'antfu/disables/scripts')?.rules ?? {}
  for (const key in config) {
    if (key.startsWith('antfu/'))
      delete config[key]
  }
  return {
    plugins: [],
    overrides: [
      {
        files: [
          '**/scripts/**/*.{,c,m}[jt]s{,x}',
        ],
        plugins: ['typescript'],
        rules: config,
      },
    ],
  }
}
