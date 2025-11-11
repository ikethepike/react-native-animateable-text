function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { Text } from 'react-native';
export const AnimateableText = /*#__PURE__*/React.forwardRef((props, ref) => {
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
  return /*#__PURE__*/React.createElement(Text, _extends({
    ref: animatedTextRef
  }, props), text);
});
//# sourceMappingURL=AnimateableText.web.js.map