import type { OxlintConfig } from 'oxlint'
import { disables as _disables, renamePluginInConfigs } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function configFiles(): Promise<OxlintConfig> {
  const configItems = renamePluginInConfigs(await _disables(), { ts: 'typescript' })
  const config: any = getConfig(configItems, 'antfu/disables/config-files')?.rules ?? {}
  for (const key in config) {
    if (key.startsWith('antfu/'))
      delete config[key]
  }
  return {
    plugins: [],
    overrides: [
      {
        files: [
          '**/*.config.{,c,m}[jt]s{,x}',
          '**/*.config.*.{,c,m}[jt]s{,x}',
        ],
        plugins: ['typescript'],
        rules: config,
      },
    ],
  }
}
