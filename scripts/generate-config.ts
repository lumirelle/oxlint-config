import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { schema } from '../src/schema'

for (const { category, name, fn } of schema) {
  const config = await fn()
  const file = join(import.meta.dirname, '..', 'internal', category, `${name}.json`)
  writeFileSync(file, `${JSON.stringify(config, null, 2)}\n`)
}
