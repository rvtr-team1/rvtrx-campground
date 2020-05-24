const SentryPlugin = require('@sentry/webpack-plugin');
const manifest = require('./package.json');

module.exports = {
  plugins: [
    new SentryPlugin({
      dryRun: process.env.SENTRY_DRY_RUN == 'true',
      include: './dist/rvtr-app-campsite/',
      release: `rvtr-app-campsite@${manifest.version}`,
      setCommits: {
        auto: true,
        repo: 'rvtr-app-campsite',
      },
    }),
  ],
};
