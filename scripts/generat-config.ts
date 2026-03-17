import type { Category } from '../src/types'
import { file } from 'bun'
import { join } from 'node:path'
import { schema } from '../src/schema'

const internalFolder: Record<Category, string> = {
  defaults: join(import.meta.dirname, '../internal/defaults'),
  rules: join(import.meta.dirname, '../internal/rules'),
}

for (const { category, name, fn } of schema) {
  const config = await fn()
  await file(join(internalFolder[category], `${name}.json`))
    .write(`${JSON.stringify(config, null, 2)}\n`)
}
