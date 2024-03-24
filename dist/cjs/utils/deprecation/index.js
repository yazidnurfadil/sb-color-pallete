"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDeprecationMessage = exports.deprecationWarning = exports["default"] = void 0;
var getDeprecationMessage = exports.getDeprecationMessage = function getDeprecationMessage(deprecated, removedIn, alternative) {
  var message1 = "Color picker warning: ".concat(deprecated, " is DEPRECATED");
  var message2 = removedIn ? " and will be removed in ".concat(removedIn, ".") : '';
  var message3 = alternative ? " Use ".concat(alternative, " instead.") : '';
  return message1 + message2 + message3;
};
var deprecationWarning = exports.deprecationWarning = function deprecationWarning(message) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  // eslint-disable-next-line no-console
  console.warn(message);
};
var warnDeprecated = function warnDeprecated(deprecated, removedIn, alternative) {
  var message = getDeprecationMessage(deprecated, removedIn, alternative);
  deprecationWarning(message);
};
var _default = exports["default"] = warnDeprecated;