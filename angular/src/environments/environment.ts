import * as manifest from '../../package.json';

export const environment = {
  config: 'assets/config.json',
  name: null,
  production: false,
  release: `rvtr-app-campsite@${manifest.version}`,
};
