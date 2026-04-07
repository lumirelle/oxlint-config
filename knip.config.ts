import type { KnipConfig } from 'knip'

export default {
  /// keep-sorted
  ignoreDependencies: ['@arethetypeswrong/cli', 'publint', 'vue'],
  /// keep-sorted
  ignoreFiles: ['fixtures/**', 'test/fixtures/**'],
} satisfies KnipConfig
