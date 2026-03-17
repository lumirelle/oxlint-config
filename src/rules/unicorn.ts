import { unicorn as _unicorn } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function unicorn(): Promise<any> {
  const configItems = await _unicorn()
  return getConfig(configItems, 'antfu/unicorn/rules').rules ?? {}
}
