import { describe, expect, it } from 'bun:test'
import javascript from '../../internal/rules/javascript.json'
import { imports } from '../../src/rules/imports'
import { jsdoc } from '../../src/rules/jsdoc'
import { node } from '../../src/rules/node'
import { oxc } from '../../src/rules/oxc'
import { promise } from '../../src/rules/promise'
import { typescript } from '../../src/rules/typescript'
import { unicorn } from '../../src/rules/unicorn'

describe('javascript rules', () => {
  it('should match inline snapshot', () => {
    expect(javascript).toMatchInlineSnapshot(`
      {
        "plugins": [
          "eslint",
        ],
        "rules": {
          "accessor-pairs": [
            "error",
            {
              "enforceForClassMembers": true,
              "setWithoutGet": true,
            },
          ],
          "array-callback-return": "error",
          "block-scoped-var": "error",
          "constructor-super": "error",
          "default-case-last": "error",
          "dot-notation": [
            "error",
            {
              "allowKeywords": true,
            },
          ],
          "eqeqeq": [
            "error",
            "smart",
          ],
          "new-cap": [
            "error",
            {
              "capIsNew": false,
              "newIsCap": true,
              "properties": true,
            },
          ],
          "no-alert": "error",
          "no-array-constructor": "error",
          "no-async-promise-executor": "error",
          "no-caller": "error",
          "no-case-declarations": "error",
          "no-class-assign": "error",
          "no-compare-neg-zero": "error",
          "no-cond-assign": [
            "error",
            "always",
          ],
          "no-console": [
            "error",
            {
              "allow": [
                "warn",
                "error",
              ],
            },
          ],
          "no-const-assign": "error",
          "no-control-regex": "error",
          "no-debugger": "error",
          "no-delete-var": "error",
          "no-dupe-class-members": "error",
          "no-dupe-keys": "error",
          "no-duplicate-case": "error",
          "no-empty": [
            "error",
            {
              "allowEmptyCatch": true,
            },
          ],
          "no-empty-character-class": "error",
          "no-empty-pattern": "error",
          "no-eval": "error",
          "no-ex-assign": "error",
          "no-extend-native": "error",
          "no-extra-bind": "error",
          "no-extra-boolean-cast": "error",
          "no-fallthrough": "error",
          "no-func-assign": "error",
          "no-global-assign": "error",
          "no-implied-eval": "error",
          "no-import-assign": "error",
          "no-invalid-regexp": "error",
          "no-irregular-whitespace": "error",
          "no-iterator": "error",
          "no-labels": [
            "error",
            {
              "allowLoop": false,
              "allowSwitch": false,
            },
          ],
          "no-lone-blocks": "error",
          "no-loss-of-precision": "error",
          "no-misleading-character-class": "error",
          "no-multi-str": "error",
          "no-new": "error",
          "no-new-func": "error",
          "no-new-native-nonconstructor": "error",
          "no-new-wrappers": "error",
          "no-obj-calls": "error",
          "no-proto": "error",
          "no-prototype-builtins": "error",
          "no-redeclare": [
            "error",
            {
              "builtinGlobals": false,
            },
          ],
          "no-regex-spaces": "error",
          "no-restricted-globals": [
            "error",
            {
              "message": "Use \`globalThis\` instead.",
              "name": "global",
            },
            {
              "message": "Use \`globalThis\` instead.",
              "name": "self",
            },
          ],
          "no-self-assign": [
            "error",
            {
              "props": true,
            },
          ],
          "no-self-compare": "error",
          "no-sequences": "error",
          "no-shadow-restricted-names": "error",
          "no-sparse-arrays": "error",
          "no-template-curly-in-string": "error",
          "no-this-before-super": "error",
          "no-throw-literal": "error",
          "no-undef": "error",
          "no-unexpected-multiline": "error",
          "no-unmodified-loop-condition": "error",
          "no-unneeded-ternary": [
            "error",
            {
              "defaultAssignment": false,
            },
          ],
          "no-unreachable": "error",
          "no-unsafe-finally": "error",
          "no-unsafe-negation": "error",
          "no-unused-expressions": [
            "error",
            {
              "allowShortCircuit": true,
              "allowTaggedTemplates": true,
              "allowTernary": true,
            },
          ],
          "no-unused-vars": [
            "error",
            {
              "args": "none",
              "caughtErrors": "none",
              "ignoreRestSiblings": true,
              "vars": "all",
            },
          ],
          "no-use-before-define": [
            "error",
            {
              "classes": false,
              "functions": false,
              "variables": true,
            },
          ],
          "no-useless-backreference": "error",
          "no-useless-call": "error",
          "no-useless-catch": "error",
          "no-useless-computed-key": "error",
          "no-useless-constructor": "error",
          "no-useless-rename": "error",
          "no-useless-return": "error",
          "no-var": "error",
          "no-with": "error",
          "prefer-const": [
            "error",
            {
              "destructuring": "all",
              "ignoreReadBeforeAssign": true,
            },
          ],
          "prefer-exponentiation-operator": "error",
          "prefer-promise-reject-errors": "error",
          "prefer-rest-params": "error",
          "prefer-spread": "error",
          "prefer-template": "error",
          "symbol-description": "error",
          "unicode-bom": [
            "error",
            "never",
          ],
          "use-isnan": [
            "error",
            {
              "enforceForIndexOf": true,
              "enforceForSwitchCase": true,
            },
          ],
          "valid-typeof": [
            "error",
            {
              "requireStringLiterals": true,
            },
          ],
          "vars-on-top": "error",
          "yoda": [
            "error",
            "never",
          ],
        },
      }
    `)
  })
})

describe('oxc rules', () => {
  it('should match inline snapshot', () => {
    expect(oxc).toMatchInlineSnapshot(`[Function: oxc]`)
  })
})

describe('unicorn rules', () => {
  it('should match inline snapshot', () => {
    expect(unicorn).toMatchInlineSnapshot(`[Function: AsyncFunction]`)
  })
})

describe('imports rules', () => {
  it('should match inline snapshot', () => {
    expect(imports).toMatchInlineSnapshot(`[Function: AsyncFunction]`)
  })
})

describe('promise rules', () => {
  it('should match inline snapshot', () => {
    expect(promise).toMatchInlineSnapshot(`[Function: promise]`)
  })
})

describe('node rules', () => {
  it('should match inline snapshot', () => {
    expect(node).toMatchInlineSnapshot(`[Function: AsyncFunction]`)
  })
})

describe('jsdoc rules', () => {
  it('should match inline snapshot', () => {
    expect(jsdoc).toMatchInlineSnapshot(`[Function: AsyncFunction]`)
  })
})

describe('typescript rules', () => {
  it('should match inline snapshot', () => {
    expect(typescript).toMatchInlineSnapshot(`[Function: AsyncFunction]`)
  })
})
