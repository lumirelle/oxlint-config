import { node as _node } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function node(): Promise<any> {
  const configItems = await _node()
  return getConfig(configItems, 'antfu/node/rules').rules ?? {}
}
