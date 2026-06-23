import type { KnipConfig } from 'knip'

export default {
  entry: ['scripts/generate-config.ts'],
  ignoreFiles: [
    // fixtures
    'fixtures/**',
    'test/fixtures/**',

    // TODO(Lumirelle): Create a pull request to add taze plugin for knip.
    'taze.config.ts',
  ],
  ignoreDependencies: [
    // Rules generator
    '@oxlint/migrate',

    // Check tools
    '@arethetypeswrong/cli',
    'publint',

    // Test fixtures prerequisites
    'vue',

    // Dependencies manager
    'taze',

    // Releasing tools
    'bumpp',
    'changelogithub',
    'pkg-pr-new',
    'npm',
  ],
} satisfies KnipConfig
