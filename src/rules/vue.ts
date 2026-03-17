import { vue as _vue } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function vue(): Promise<any> {
  const configItems = await _vue()
  const globalsConfig = getConfig(configItems, 'antfu/vue/setup')
  const rulesConfig = getConfig(configItems, 'antfu/vue/rules')
  return {
    globals: globalsConfig.languageOptions?.globals,
    rules: rulesConfig.rules,
  }
}
