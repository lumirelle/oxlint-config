import { ignores as _ignores } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function ignores(): Promise<any> {
  const configItems = await _ignores()
  return getConfig(configItems, 'antfu/ignores')?.ignores ?? {}
}
