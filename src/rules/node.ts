import type { OxlintConfig } from 'oxlint'
import { node as _node } from '@antfu/eslint-config'
import { getConfig } from '../utils'

const NODE_RULES_CURRENTLY_NOT_SUPPORTED_LIST = ['node/no-deprecated-api', 'node/process-exit-as-throw', 'node/prefer-global/buffer', 'node/prefer-global/process']

export async function node(): Promise<OxlintConfig> {
  const configItems = await _node()
  const rules: any = getConfig(configItems, 'antfu/node/rules').rules ?? {}
  for (const key in rules) {
    if (NODE_RULES_CURRENTLY_NOT_SUPPORTED_LIST.includes(key))
      // Currently does not supported by oxlint, see
      // https://github.com/oxc-project/oxc/issues/493
      delete rules[key]
  }
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
