const SentryPlugin = require('@sentry/webpack-plugin');
const manifest = require('./package.json');
const ngConfig = require('./angular.json');

module.exports = {
  plugins: [
    new SentryPlugin({
      dryRun: process.env.SENTRY_DRY_RUN == undefined || process.env.SENTRY_DRY_RUN == 'true',
      include: `./dist/${ngConfig.defaultProject}/`,
      release: `${ngConfig.defaultProject}@${manifest.version}`,
      setCommits: {
        auto: true,
        repo: `${ngConfig.defaultProject}`,
      },
    }),
  ],
};
