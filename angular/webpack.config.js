const SentryPlugin = require('@sentry/webpack-plugin');

module.exports = {
  plugins: [
    new SentryPlugin({
      include: './dist/rvtr-app-campsite/',
      release: `rvtr-app-campsite@${process.env.npm_package_version}`,
      setCommits: {
        auto: true,
        repo: 'rvtr-app-campsite',
      },
    }),
  ],
};
