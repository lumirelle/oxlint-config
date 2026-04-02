import { describe, expect, it } from 'bun:test'
import bin from '../../internal/disables/bin.json'
import cjs from '../../internal/disables/cjs.json'
import cli from '../../internal/disables/cli.json'
import configFiles from '../../internal/disables/config-files.json'
import dts from '../../internal/disables/dts.json'
import scripts from '../../internal/disables/scripts.json'

describe('scripts disables', () => {
  it('should match inline snapshot', () => {
    expect(scripts).toMatchInlineSnapshot(`
      {
        "overrides": [
          {
            "files": [
              "**/scripts/**/*.{,c,m}[jt]s{,x}",
            ],
            "plugins": [
              "typescript",
            ],
            "rules": {
              "no-console": "off",
              "typescript/explicit-function-return-type": "off",
            },
          },
        ],
        "plugins": [],
      }
    `)
  })
})

describe('cli disables', () => {
  it('should match inline snapshot', () => {
    expect(cli).toMatchInlineSnapshot(`
      {
        "overrides": [
          {
            "files": [
              "**/cli/**/*.{,c,m}[jt]s{,x}",
              "**/cli.{,c,m}[jt]s{,x}",
            ],
            "rules": {
              "no-console": "off",
            },
          },
        ],
        "plugins": [],
      }
    `)
  })
})

describe('bin disables', () => {
  it('should match inline snapshot', () => {
    expect(bin).toMatchInlineSnapshot(`
      {
        "overrides": [
          {
            "files": [
              "**/bin/**/*",
              "**/bin.{,c,m}[jt]s{,x}",
            ],
            "rules": {},
          },
        ],
        "plugins": [],
      }
    `)
  })
})

describe('dts disables', () => {
  it('should match inline snapshot', () => {
    expect(dts).toMatchInlineSnapshot(`
      {
        "overrides": [
          {
            "files": [
              "**/*.d.{,c,m}ts",
            ],
            "rules": {},
          },
        ],
        "plugins": [],
      }
    `)
  })
})

describe('cjs disables', () => {
  it('should match inline snapshot', () => {
    expect(cjs).toMatchInlineSnapshot(`
      {
        "overrides": [
          {
            "files": [
              "**/*.{,c}js",
            ],
            "plugins": [
              "typescript",
            ],
            "rules": {
              "typescript/no-require-imports": "off",
            },
          },
        ],
        "plugins": [],
      }
    `)
  })
})

describe('config-files disables', () => {
  it('should match inline snapshot', () => {
    expect(configFiles).toMatchInlineSnapshot(`
      {
        "overrides": [
          {
            "files": [
              "**/*.config.{,c,m}[jt]s{,x}",
              "**/*.config.*.{,c,m}[jt]s{,x}",
            ],
            "plugins": [
              "typescript",
            ],
            "rules": {
              "no-console": "off",
              "typescript/explicit-function-return-type": "off",
            },
          },
        ],
        "plugins": [],
      }
    `)
  })
})
