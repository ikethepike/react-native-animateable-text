"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
var _AnimateableText = require("./AnimateableText");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_reactNativeReanimated.default.addWhitelistedNativeProps({
  text: true
});
const AnimateableText = _reactNativeReanimated.default.createAnimatedComponent(_AnimateableText.AnimateableText);
var _default = exports.default = AnimateableText;
//# sourceMappingURL=index.js.map