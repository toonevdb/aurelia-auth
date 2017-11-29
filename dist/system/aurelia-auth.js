'use strict';

System.register(['./auth-service', './authentication', './authorize-step', './auth-fetch-config', './base-config', './oAuth1', './oAuth2', './auth-filter'], function (_export, _context) {
  "use strict";

  var AuthService, Authentication, AuthorizeStep, FetchConfig, BaseConfig, OAuth1, OAuth2, AuthFilterValueConverter;
  function configure(aurelia, configCallback) {
    aurelia.globalResources('./auth-filter');

    var baseConfig = aurelia.container.get(BaseConfig);
    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(baseConfig);
    }
  }

  _export('configure', configure);

  return {
    setters: [function (_authService) {
      AuthService = _authService.AuthService;
    }, function (_authentication) {
      Authentication = _authentication.Authentication;
    }, function (_authorizeStep) {
      AuthorizeStep = _authorizeStep.AuthorizeStep;
    }, function (_authFetchConfig) {
      FetchConfig = _authFetchConfig.FetchConfig;
    }, function (_baseConfig) {
      BaseConfig = _baseConfig.BaseConfig;
    }, function (_oAuth) {
      OAuth1 = _oAuth.OAuth1;
    }, function (_oAuth2) {
      OAuth2 = _oAuth2.OAuth2;
    }, function (_authFilter) {
      AuthFilterValueConverter = _authFilter.AuthFilterValueConverter;
    }],
    execute: function () {
      _export('Authentication', Authentication);

      _export('AuthFilterValueConverter', AuthFilterValueConverter);

      _export('AuthService', AuthService);

      _export('AuthorizeStep', AuthorizeStep);

      _export('BaseConfig', BaseConfig);

      _export('FetchConfig', FetchConfig);

      _export('OAuth1', OAuth1);

      _export('OAuth2', OAuth2);
    }
  };
});