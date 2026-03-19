import type { OxlintConfig } from 'oxlint'
import { node as _node } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function node(): Promise<OxlintConfig> {
  const configItems = await _node()
  const rules: any = getConfig(configItems, 'antfu/node/rules').rules ?? {}
  return {
    plugins: [],
    overrides: [
      {
        files: ['**/*.{,c,m}[jt]s{,x}'],
        plugins: ['node'],
        rules,
      },
    ],
  }
}
