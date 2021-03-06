import { Environment } from './types/environment.type';
import * as manifest from '../../package.json';
import * as ngConfig from '../../angular.json';

export const environment: Environment = {
  config: 'app.config.local.json',
  identity: {
    clientId: '0oa5empza950mqdtw357',
    issuer: 'https://identity.rvtr.net/oauth2/default',
    pkce: true,
    redirectUri: `${location.protocol}//${location.host}/oauth2/authorize`,
    scopes: ['openid', 'profile', 'email'],
  },
  monitoring: 'https://ec61288c429544a6ad850b94de25004a@o388320.ingest.sentry.io/5229046',
  name: '',
  production: false,
  release: `${ngConfig.defaultProject}@${manifest.version}`,
};
