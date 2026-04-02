import type { OxlintConfig } from 'oxlint'
import { disables as _disables } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function bin(): Promise<OxlintConfig> {
  const configItems = await _disables()
  const config: any = getConfig(configItems, 'antfu/disables/bin')?.rules ?? {}
  for (const key in config) {
    if (key.startsWith('antfu/'))
      delete config[key]
  }
  return {
    plugins: [],
    overrides: [
      {
        files: [
          '**/bin/**/*',
          '**/bin.{,c,m}[jt]s{,x}',
        ],
        rules: config,
      },
    ],
  }
}
