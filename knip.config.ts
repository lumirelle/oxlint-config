import type { KnipConfig } from 'knip'

export default {
  entry: ['{src,test,fixtures,scripts}/**/*.{ts,js,vue}'],
  ignoreBinaries: ['mise'],
  ignoreDependencies: ['@arethetypeswrong/cli', 'nano-staged', 'publint', 'bumpp'],
} satisfies KnipConfig
