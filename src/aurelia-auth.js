import {AuthService} from './auth-service';
import {Authentication} from './authentication';
import {AuthorizeStep} from './authorize-step';
import {FetchConfig} from './auth-fetch-config';
import {BaseConfig} from './base-config';
import {AuthFilterValueConverter} from './auth-filter';

export function configure(aurelia, configCallback) {
  aurelia.globalResources('./auth-filter');

  let baseConfig = aurelia.container.get(BaseConfig);
  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(baseConfig);
  }
}

export {
  Authentication,
  AuthFilterValueConverter,
  AuthService,
  AuthorizeStep,
  BaseConfig,
  FetchConfig
};
