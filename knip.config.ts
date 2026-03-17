import type { KnipConfig } from 'knip'
import { name as thisPkg } from './package.json'

export default {
  /// keep-sorted
  ignoreDependencies: ['@arethetypeswrong/cli', 'publint', 'vue', thisPkg],
  /// keep-sorted
  ignoreFiles: ['fixture/**', 'test/fixture/**'],
} satisfies KnipConfig
