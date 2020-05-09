import * as manifest from '../../package.json';

export const environment = {
  config: 'assets/config.json',
  name: 'DEV',
  production: true,
  release: `rvtr-app-campsite@${manifest.version}`,
};
