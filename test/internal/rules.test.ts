import { describe, expect, it } from 'bun:test'
import javascript from '../../internal/rules/javascript.json'

describe('javascript rules', () => {
  it('should match inline snapshot', () => {
    expect(javascript).toMatchInlineSnapshot(``)
  })
})
