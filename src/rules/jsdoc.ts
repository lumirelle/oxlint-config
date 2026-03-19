import type { OxlintConfig } from 'oxlint'
import { jsdoc as _jsdoc } from '@antfu/eslint-config'
import { getConfig } from '../utils'

export async function jsdoc(): Promise<OxlintConfig> {
  const configItems = await _jsdoc()
  const rules: any = getConfig(configItems, 'antfu/jsdoc/rules').rules ?? {}
  return {
    plugins: [],
    overrides: [
      {
        files: ['**/*.{,c,m}[jt]s{,x}'],
        plugins: ['jsdoc'],
        rules,
      },
    ],
  }
}
