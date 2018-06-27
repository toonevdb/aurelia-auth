'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OAuth2 = exports.OAuth1 = exports.FetchConfig = exports.BaseConfig = exports.AuthorizeStep = exports.AuthService = exports.AuthFilterValueConverter = exports.Authentication = undefined;
exports.configure = configure;

var _authService = require('./auth-service');

var _authentication = require('./authentication');

var _authorizeStep = require('./authorize-step');

var _authFetchConfig = require('./auth-fetch-config');

var _baseConfig = require('./base-config');

var _oAuth = require('./oAuth1');

var _oAuth2 = require('./oAuth2');

var _authFilter = require('./auth-filter');

var {PLATFORM} = require('aurelia-pal');

function configure(aurelia, configCallback) {
  aurelia.globalResources(PLATFORM.moduleName('./auth-filter'));

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
