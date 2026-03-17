import type { SchemaItem } from './types'
import { ignores } from './defaults/ignores'
import { imports } from './rules/imports'
import { javascript } from './rules/javascript'
import { jsdoc } from './rules/jsdoc'
import { node } from './rules/node'
import { oxc } from './rules/oxc'
import { promise } from './rules/promise'
import { typescript } from './rules/typescript'
import { unicorn } from './rules/unicorn'
import { vue } from './rules/vue'

const JS_RULES_FILTERING_REG = /^(?:antfu|unused-import)/

const schema: SchemaItem[] = [
  // Defaults
  {
    name: 'ignores',
    category: 'defaults',
    fn: async () => ({
      ignorePatterns: await ignores(),
    }),
  },

  // Rules
  {
    name: 'javascript',
    category: 'rules',
    fn: async () => {
      const rules = await javascript()
      for (const key in rules) {
        if (JS_RULES_FILTERING_REG.test(key))
          delete rules[key]
      }
      return {
        plugins: ['eslint'],
        rules,
      }
    },
  },
  {
    name: 'oxc',
    category: 'rules',
    fn: async () => ({
      plugins: ['oxc'],
      rules: await oxc(),
    }),
  },
  {
    name: 'unicorn',
    category: 'rules',
    fn: async () => ({
      plugins: ['unicorn'],
      rules: await unicorn(),
    }),
  },
  {
    name: 'imports',
    category: 'rules',
    fn: async () => {
      const rules = await imports()
      for (const key in rules) {
        if (key.startsWith('antfu'))
          delete rules[key]
        else if (key === 'import/consistent-type-specifier-style')
          // Plugin `eslint-plugin-import-lite` rename `prefer-top-level` to `top-level`,
          // see https://github.com/9romise/eslint-plugin-import-lite/blob/main/src/rules/consistent-type-specifier-style/README.md
          rules[key] = ['error', 'prefer-top-level']
      }
      return {
        plugins: ['import'],
        rules,
      }
    },
  },
  {
    name: 'promise',
    category: 'rules',
    fn: async () => ({
      plugins: ['promise'],
      rules: await promise(),
    }),
  },
  {
    name: 'node',
    category: 'rules',
    fn: async () => ({
      plugins: [],
      overrides: [
        {
          files: ['**/*.{,c,m}[jt]s{,x}'],
          plugins: ['node'],
          rules: await node(),
        },
      ],
    }),
  },
  {
    name: 'jsdoc',
    category: 'rules',
    fn: async () => ({
      plugins: [],
      overrides: [
        {
          files: ['**/*.{,c,m}[jt]s{,x}'],
          plugins: ['jsdoc'],
          rules: await jsdoc(),
        },
      ],
    }),
  },
  {
    name: 'typescript',
    category: 'rules',
    fn: async () => ({
      plugins: [],
      overrides: [
        {
          files: ['**/*.{,c,m}ts', '**/*.{,c,m}tsx', '**/*.vue'],
          plugins: ['typescript'],
          rules: await typescript(),
        },
      ],
    }),
  },
  {
    name: 'vue',
    category: 'rules',
    fn: async () => {
      const config = await vue()
      return {
        plugins: [],
        overrides: [
          {
            files: ['**/*.vue'],
            plugins: ['vue'],
            globals: config.globals,
            rules: config.rules,
          },
        ],
      }
    },
  },
]

export {
  schema,
}
