import { jsdoc as _jsdoc } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function jsdoc(): Promise<any> {
  const configItems = await _jsdoc()
  return getConfig(configItems, 'antfu/jsdoc/rules').rules ?? {}
}
