import type { OxlintConfig } from 'oxlint'
import { unicorn as _unicorn } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function unicorn(): Promise<OxlintConfig> {
  const configItems = await _unicorn()
  const rules: any = getConfig(configItems, 'antfu/unicorn/rules').rules ?? {}
  return {
    plugins: [],
    overrides: [
      {
        files: ['**/*.{,c,m}[jt]s{,x}'],
        plugins: ['unicorn'],
        rules,
      },
    ],
  }
}
