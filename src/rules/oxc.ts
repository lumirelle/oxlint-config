import type { Awaitable } from '@antfu/eslint-config'
import type { OxlintConfig } from 'oxlint'

export function oxc(): Awaitable<OxlintConfig> {
  return {
    plugins: ['oxc'],
    rules: {
      'oxc/approx-constant': 'error',
      // JS only
      'oxc/bad-array-method-on-arguments': 'error',
      'oxc/bad-bitwise-operator': 'error',
      'oxc/bad-char-at-comparison': 'error',
      'oxc/bad-comparison-sequence': 'error',
      'oxc/bad-min-max-func': 'error',
      'oxc/bad-object-literal-comparison': 'error',
      'oxc/bad-replace-all-arg': 'error',
      'oxc/branches-sharing-code': 'error',
      'oxc/const-comparisons': 'error',
      'oxc/double-comparisons': 'error',
      'oxc/erasing-op': 'error',
      'oxc/misrefactored-assign-op': 'error',
      // XXX(Lumirelle): Need check
      'oxc/missing-throw': 'error',
      'oxc/no-accumulating-spread': 'error',
      'oxc/no-barrel-file': 'error',
      'oxc/no-map-spread': 'error',
      'oxc/no-this-in-exported-function': 'error',
      'oxc/number-arg-out-of-range': 'error',
      'oxc/only-used-in-recursion': 'error',
      'oxc/uninvoked-array-callback': 'error',
    },
  }
}
