import { describe, expect, it } from 'vitest'
import vue from '../.oxlintrc.vue.json'

describe('.oxlintrc.vue.json', () => {
  it('should match snapshot', () => {
    expect(vue).toMatchInlineSnapshot(`
      {
        "$schema": "./node_modules/oxlint/configuration_schema.json",
        "extends": [
          "./.oxlintrc.ts.json",
          "./internal/rules/vue.json",
        ],
      }
    `)
  })
})
