import { file } from 'bun'
import { join } from 'node:path'
import { schema } from '../src/schema'

for (const { category, name, fn } of schema) {
  const config = await fn()
  await file(join(import.meta.dirname, '..', 'internal', category, `${name}.json`))
    .write(`${JSON.stringify(config, null, 2)}\n`)
}
