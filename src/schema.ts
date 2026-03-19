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

export const schema: SchemaItem[] = [
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
    fn: javascript,
  },
  {
    name: 'oxc',
    category: 'rules',
    fn: oxc,
  },
  {
    name: 'unicorn',
    category: 'rules',
    fn: unicorn,
  },
  {
    name: 'imports',
    category: 'rules',
    fn: imports,
  },
  {
    name: 'promise',
    category: 'rules',
    fn: promise,
  },
  {
    name: 'node',
    category: 'rules',
    fn: node,
  },
  {
    name: 'jsdoc',
    category: 'rules',
    fn: jsdoc,
  },
  {
    name: 'typescript',
    category: 'rules',
    fn: typescript,
  },
  {
    name: 'vue',
    category: 'rules',
    fn: vue,
  },
]
