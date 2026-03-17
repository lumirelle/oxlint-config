import { typescript as _typescript, renamePluginInConfigs } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function typescript(): Promise<any> {
  const configItems = renamePluginInConfigs(await _typescript(), { ts: 'typescript' })
  return getConfig(configItems, 'antfu/typescript/rules').rules ?? {}
}
