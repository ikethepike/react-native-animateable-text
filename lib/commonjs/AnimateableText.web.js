"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimateableText = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const AnimateableText = exports.AnimateableText = /*#__PURE__*/React.forwardRef((props, ref) => {
  const [text, setText] = React.useState(props.text);
  const animatedTextRef = React.useRef(null);

  // just in case users tried to update the value without
  // a shared value
  React.useEffect(() => {
    if (props.text) {
      setText(props.text);
    }
  }, [props.text]);
  React.useImperativeHandle(ref, () => ({
    setNativeProps: nativeProps => {
      if (animatedTextRef.current && nativeProps.text) {
        setText(nativeProps === null || nativeProps === void 0 ? void 0 : nativeProps.text);
      }
    }
  }), []);
  return /*#__PURE__*/React.createElement(_reactNative.Text, _extends({
    ref: animatedTextRef
  }, props), text);
});
//# sourceMappingURL=AnimateableText.web.js.map