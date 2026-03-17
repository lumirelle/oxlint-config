import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import type { NameOrIndex } from './types'

function getConfig(configItems: TypedFlatConfigItem[], name: NameOrIndex): TypedFlatConfigItem {
  return configItems?.find(item => item.name === name) ?? {}
}

export { getConfig }
