'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticatedFilterValueConverter = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaAuthentication = require('./aurelia-authentication');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthenticatedFilterValueConverter = exports.AuthenticatedFilterValueConverter = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaAuthentication.AuthService), _dec(_class = function () {
  function AuthenticatedFilterValueConverter(authService) {
    _classCallCheck(this, AuthenticatedFilterValueConverter);

    this.authService = authService;
  }

  AuthenticatedFilterValueConverter.prototype.toView = function toView(routes) {
    var isAuthenticated = arguments.length <= 1 || arguments[1] === undefined ? this.authService.authenticated : arguments[1];

    return routes.filter(function (route) {
      return typeof route.config.auth !== 'boolean' || route.config.auth === isAuthenticated;
    });
  };

  return AuthenticatedFilterValueConverter;
}()) || _class);