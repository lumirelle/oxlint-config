import type { KnipConfig } from 'knip'

export default {
  entry: ['{src,test,fixtures,scripts}/**/*.{ts,js,vue}'],
  ignoreFiles: ['taze.config.ts'],
  ignoreDependencies: ['taze'],
} satisfies KnipConfig
