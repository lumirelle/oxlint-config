import { describe, expect, it } from 'bun:test'
import imports from '../../internal/rules/imports.json'
import javascript from '../../internal/rules/javascript.json'
import jsdoc from '../../internal/rules/jsdoc.json'
import node from '../../internal/rules/node.json'
import oxc from '../../internal/rules/oxc.json'
import promise from '../../internal/rules/promise.json'
import typescript from '../../internal/rules/typescript.json'
import unicorn from '../../internal/rules/unicorn.json'

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
    expect(oxc).toMatchInlineSnapshot(`
      {
        "plugins": [
          "oxc",
        ],
        "rules": {
          "oxc/approx-constant": "error",
          "oxc/bad-array-method-on-arguments": "error",
          "oxc/bad-bitwise-operator": "error",
          "oxc/bad-char-at-comparison": "error",
          "oxc/bad-comparison-sequence": "error",
          "oxc/bad-min-max-func": "error",
          "oxc/bad-object-literal-comparison": "error",
          "oxc/bad-replace-all-arg": "error",
          "oxc/branches-sharing-code": "error",
          "oxc/const-comparisons": "error",
          "oxc/double-comparisons": "error",
          "oxc/erasing-op": "error",
          "oxc/misrefactored-assign-op": "error",
          "oxc/missing-throw": "error",
          "oxc/no-accumulating-spread": "error",
          "oxc/no-barrel-file": "error",
          "oxc/no-this-in-exported-function": "error",
          "oxc/number-arg-out-of-range": "error",
          "oxc/only-used-in-recursion": "error",
          "oxc/uninvoked-array-callback": "error",
        },
      }
    `)
  })
})

describe('unicorn rules', () => {
  it('should match inline snapshot', () => {
    expect(unicorn).toMatchInlineSnapshot(`
      {
        "plugins": [
          "unicorn",
        ],
        "rules": {
          "unicorn/consistent-empty-array-spread": "error",
          "unicorn/error-message": "error",
          "unicorn/escape-case": "error",
          "unicorn/new-for-builtins": "error",
          "unicorn/no-instanceof-builtins": "error",
          "unicorn/no-new-array": "error",
          "unicorn/no-new-buffer": "error",
          "unicorn/number-literal-case": "error",
          "unicorn/prefer-dom-node-text-content": "error",
          "unicorn/prefer-includes": "error",
          "unicorn/prefer-node-protocol": "error",
          "unicorn/prefer-number-properties": "error",
          "unicorn/prefer-string-starts-ends-with": "error",
          "unicorn/prefer-type-error": "error",
          "unicorn/throw-new-error": "error",
        },
      }
    `)
  })
})

describe('imports rules', () => {
  it('should match inline snapshot', () => {
    expect(imports).toMatchInlineSnapshot(`
      {
        "plugins": [
          "import",
        ],
        "rules": {
          "import/consistent-type-specifier-style": [
            "error",
            "prefer-top-level",
          ],
          "import/first": "error",
          "import/no-duplicates": "error",
          "import/no-mutable-exports": "error",
          "import/no-named-default": "error",
        },
      }
    `)
  })
})

describe('promise rules', () => {
  it('should match inline snapshot', () => {
    expect(promise).toMatchInlineSnapshot(`
      {
        "plugins": [
          "promise",
        ],
        "rules": {
          "promise/always-return": "error",
          "promise/avoid-new": "error",
          "promise/catch-or-return": "error",
          "promise/no-callback-in-promise": "error",
          "promise/no-multiple-resolved": "error",
          "promise/no-nesting": "error",
          "promise/no-new-statics": "error",
          "promise/no-promise-in-callback": "error",
          "promise/no-return-in-finally": "error",
          "promise/no-return-wrap": "error",
          "promise/param-names": "error",
          "promise/prefer-await-to-callbacks": "error",
          "promise/prefer-await-to-then": "error",
          "promise/prefer-catch": "error",
          "promise/spec-only": "error",
          "promise/valid-params": "error",
        },
      }
    `)
  })
})

describe('node rules', () => {
  it('should match inline snapshot', () => {
    expect(node).toMatchInlineSnapshot(`
      {
        "overrides": [
          {
            "files": [
              "**/*.{,c,m}[jt]s{,x}",
            ],
            "plugins": [
              "node",
            ],
            "rules": {
              "node/handle-callback-err": [
                "error",
                "^(err|error)$",
              ],
              "node/no-exports-assign": "error",
              "node/no-new-require": "error",
              "node/no-path-concat": "error",
            },
          },
        ],
        "plugins": [],
      }
    `)
  })
})

describe('jsdoc rules', () => {
  it('should match inline snapshot', () => {
    expect(jsdoc).toMatchInlineSnapshot(`
      {
        "overrides": [
          {
            "files": [
              "**/*.{,c,m}[jt]s{,x}",
            ],
            "plugins": [
              "jsdoc",
            ],
            "rules": {
              "jsdoc/check-access": "warn",
              "jsdoc/check-property-names": "warn",
              "jsdoc/empty-tags": "warn",
              "jsdoc/implements-on-classes": "warn",
              "jsdoc/no-defaults": "warn",
              "jsdoc/require-param-name": "warn",
              "jsdoc/require-property": "warn",
              "jsdoc/require-property-description": "warn",
              "jsdoc/require-property-name": "warn",
              "jsdoc/require-returns-description": "warn",
            },
          },
        ],
        "plugins": [],
      }
    `)
  })
})

describe('typescript rules', () => {
  it('should match inline snapshot', () => {
    expect(typescript).toMatchInlineSnapshot(`
      {
        "overrides": [
          {
            "files": [
              "**/*.{,c,m}ts",
              "**/*.{,c,m}tsx",
              "**/*.vue",
            ],
            "plugins": [
              "typescript",
            ],
            "rules": {
              "constructor-super": "off",
              "getter-return": "off",
              "no-array-constructor": "off",
              "no-class-assign": "off",
              "no-const-assign": "off",
              "no-dupe-class-members": "off",
              "no-dupe-keys": "off",
              "no-func-assign": "off",
              "no-import-assign": "off",
              "no-new-native-nonconstructor": "off",
              "no-obj-calls": "off",
              "no-redeclare": "off",
              "no-setter-return": "off",
              "no-this-before-super": "off",
              "no-undef": "off",
              "no-unreachable": "off",
              "no-unsafe-negation": "off",
              "no-unused-expressions": "off",
              "no-unused-vars": "off",
              "no-use-before-define": "off",
              "no-useless-constructor": "off",
              "no-var": "error",
              "no-with": "off",
              "prefer-const": "error",
              "prefer-rest-params": "error",
              "prefer-spread": "error",
              "typescript/ban-ts-comment": [
                "error",
                {
                  "ts-expect-error": "allow-with-description",
                },
              ],
              "typescript/consistent-type-definitions": [
                "error",
                "interface",
              ],
              "typescript/consistent-type-imports": [
                "error",
                {
                  "disallowTypeAnnotations": false,
                  "fixStyle": "separate-type-imports",
                  "prefer": "type-imports",
                },
              ],
              "typescript/no-array-constructor": "error",
              "typescript/no-dupe-class-members": "error",
              "typescript/no-duplicate-enum-values": "error",
              "typescript/no-dynamic-delete": "off",
              "typescript/no-empty-object-type": [
                "error",
                {
                  "allowInterfaces": "always",
                },
              ],
              "typescript/no-explicit-any": "off",
              "typescript/no-extra-non-null-assertion": "error",
              "typescript/no-extraneous-class": "off",
              "typescript/no-import-type-side-effects": "error",
              "typescript/no-invalid-void-type": "off",
              "typescript/no-misused-new": "error",
              "typescript/no-namespace": "error",
              "typescript/no-non-null-asserted-nullish-coalescing": "error",
              "typescript/no-non-null-asserted-optional-chain": "error",
              "typescript/no-non-null-assertion": "off",
              "typescript/no-redeclare": [
                "error",
                {
                  "builtinGlobals": false,
                },
              ],
              "typescript/no-require-imports": "error",
              "typescript/no-this-alias": "error",
              "typescript/no-unnecessary-type-constraint": "error",
              "typescript/no-unsafe-declaration-merging": "error",
              "typescript/no-unsafe-function-type": "error",
              "typescript/no-unused-expressions": [
                "error",
                {
                  "allowShortCircuit": true,
                  "allowTaggedTemplates": true,
                  "allowTernary": true,
                },
              ],
              "typescript/no-unused-vars": "off",
              "typescript/no-use-before-define": [
                "error",
                {
                  "classes": false,
                  "functions": false,
                  "variables": true,
                },
              ],
              "typescript/no-useless-constructor": "off",
              "typescript/no-wrapper-object-types": "error",
              "typescript/prefer-as-const": "error",
              "typescript/prefer-literal-enum-member": "error",
              "typescript/prefer-namespace-keyword": "error",
              "typescript/triple-slash-reference": "off",
              "typescript/unified-signatures": "off",
            },
          },
        ],
        "plugins": [],
      }
    `)
  })
})
