import { typescript as _typescript } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function typescript(): Promise<any> {
  const configItems = await _typescript()
  return getConfig(configItems, 'antfu/typescript/rules').rules ?? {}
}
