"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimateableText = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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
  return /*#__PURE__*/React.createElement(_reactNative.Text, {
    ref: animatedTextRef,
    ...props
  }, text);
});
//# sourceMappingURL=AnimateableText.web.js.map