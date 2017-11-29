define(['exports', './auth-service', './authentication', './authorize-step', './auth-fetch-config', './base-config', './oAuth1', './oAuth2', './auth-filter'], function (exports, _authService, _authentication, _authorizeStep, _authFetchConfig, _baseConfig, _oAuth, _oAuth2, _authFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.OAuth2 = exports.OAuth1 = exports.FetchConfig = exports.BaseConfig = exports.AuthorizeStep = exports.AuthService = exports.AuthFilterValueConverter = exports.Authentication = undefined;
  exports.configure = configure;
  function configure(aurelia, configCallback) {
    aurelia.globalResources('./auth-filter');

    var baseConfig = aurelia.container.get(_baseConfig.BaseConfig);
    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(baseConfig);
    }
  }

  exports.Authentication = _authentication.Authentication;
  exports.AuthFilterValueConverter = _authFilter.AuthFilterValueConverter;
  exports.AuthService = _authService.AuthService;
  exports.AuthorizeStep = _authorizeStep.AuthorizeStep;
  exports.BaseConfig = _baseConfig.BaseConfig;
  exports.FetchConfig = _authFetchConfig.FetchConfig;
  exports.OAuth1 = _oAuth.OAuth1;
  exports.OAuth2 = _oAuth2.OAuth2;
});