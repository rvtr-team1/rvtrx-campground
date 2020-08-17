import * as manifest from '../../package.json';

export const environment = {
  config: 'app.config.local.json',
  name: '',
  production: false,
  release: `rvtr-app-campsite@${manifest.version}`,
};
