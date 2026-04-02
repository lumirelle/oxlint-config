import { describe, expect, it } from 'bun:test'
import ignores from '../../internal/defaults/ignores.json'

describe('ignores', () => {
  it('should match inline snapshot', () => {
    expect(ignores).toMatchInlineSnapshot(`
      {
        "ignorePatterns": [
          "**/node_modules",
          "**/dist",
          "**/package-lock.json",
          "**/yarn.lock",
          "**/pnpm-lock.yaml",
          "**/bun.lockb",
          "**/output",
          "**/coverage",
          "**/temp",
          "**/.temp",
          "**/tmp",
          "**/.tmp",
          "**/.history",
          "**/.vitepress/cache",
          "**/.nuxt",
          "**/.next",
          "**/.svelte-kit",
          "**/.vercel",
          "**/.changeset",
          "**/.idea",
          "**/.cache",
          "**/.output",
          "**/.vite-inspect",
          "**/.yarn",
          "**/vite.config.*.timestamp-*",
          "**/CHANGELOG*.md",
          "**/*.min.*",
          "**/LICENSE*",
          "**/__snapshots__",
          "**/auto-import?(s).d.ts",
          "**/components.d.ts",
        ],
      }
    `)
  })
})
