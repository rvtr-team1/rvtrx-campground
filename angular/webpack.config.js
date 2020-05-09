const SentryPlugin = require('@sentry/webpack-plugin');
const manifest = require('./package.json');

module.exports = {
  plugins: [
    new SentryPlugin({
      include: './dist/rvtr-app-campsite/',
      release: `rvtr-app-campsite@${manifest.version}`,
      setCommits: {
        auto: true,
        repo: 'rvtr-app-campsite',
      },
    }),
  ],
};
