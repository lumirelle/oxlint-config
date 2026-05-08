import type { KnipConfig } from 'knip'

export default {
  ignoreDependencies: ['@arethetypeswrong/cli', 'publint', 'vue'],
  ignoreFiles: ['fixtures/**', 'test/fixtures/**'],
} satisfies KnipConfig
