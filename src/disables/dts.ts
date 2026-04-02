import type { OxlintConfig } from 'oxlint'
import { disables as _disables } from '@antfu/eslint-config'
import { getConfig } from '../utils'

const DTS_DISABLES_FILTERING_REG = /^(?:eslint-comments|unused-imports)/i
const DTS_RULES_CURRENTLY_NOT_SUPPORTED_LIST = ['no-restricted-syntax']

export async function dts(): Promise<OxlintConfig> {
  const configItems = await _disables()
  const config: any = getConfig(configItems, 'antfu/disables/dts')?.rules ?? {}
  for (const key in config) {
    if (DTS_DISABLES_FILTERING_REG.test(key))
      delete config[key]
    if (DTS_RULES_CURRENTLY_NOT_SUPPORTED_LIST.includes(key))
      // Currently does not supported by oxlint, see
      // https://github.com/oxc-project/oxc/issues/479
      delete config[key]
  }
  return {
    plugins: [],
    overrides: [
      {
        files: ['**/*.d.{,c,m}ts'],
        rules: config,
      },
    ],
  }
}
