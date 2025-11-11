"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
var _AnimateableText = require("./AnimateableText");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_reactNativeReanimated.default.addWhitelistedNativeProps({
  text: true,
  color: true,
  fontSize: true,
  fontFamily: true,
  fontWeight: true,
  fontStyle: true,
  textAlign: true,
  numberOfLines: true,
  lineHeight: true,
  letterSpacing: true,
  textDecorationLine: true
});
const AnimateableTextComponent = _reactNativeReanimated.default.createAnimatedComponent(_AnimateableText.AnimateableText);

// Cast to properly typed component that supports animatedProps with text
const AnimateableText = AnimateableTextComponent;
var _default = exports.default = AnimateableText;
//# sourceMappingURL=index.js.map