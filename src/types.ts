import type { Awaitable } from '@antfu/eslint-config'
import type antfu from '@antfu/eslint-config'
import type { OxlintConfig } from 'oxlint'

type FlatConfigComposer = ReturnType<typeof antfu>

type NameOrIndex = Parameters<FlatConfigComposer['override']>[0]

type Category = 'defaults' | 'rules'

interface SchemaItem {
  category: Category
  name: string
  fn: () => Awaitable<OxlintConfig>
}

export type {
  Category,
  NameOrIndex,
  SchemaItem,
}
