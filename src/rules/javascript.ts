import { javascript as _javascript } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function javascript(): Promise<any> {
  const configItems = await _javascript()
  return getConfig(configItems, 'antfu/javascript/rules').rules ?? {}
}
