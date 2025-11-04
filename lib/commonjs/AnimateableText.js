"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimateableText = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _reactNative = require("react-native");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const isTouchable = props => props.onPress != null || props.onLongPress != null || props.onStartShouldSetResponder != null;
const RCTText = (0, _reactNative.requireNativeComponent)('JBAnimatedText');
const TouchableText = /*#__PURE__*/(0, _react.forwardRef)((props, forwardedRef) => {
  const [isHighlighted, setHighlighted] = (0, _react.useState)(false);
  const [isPressing, setIsPressing] = (0, _react.useState)(false);
  const responseHandlers = (0, _react.useMemo)(() => {
    if (!isTouchable(props)) return undefined;
    return {
      onStartShouldSetResponder: () => {
        var _props$onStartShouldS;
        return (((_props$onStartShouldS = props.onStartShouldSetResponder) === null || _props$onStartShouldS === void 0 ? void 0 : _props$onStartShouldS.call(props)) ?? false) || isTouchable(props);
      },
      onResponderGrant: event => {
        var _props$onResponderGra;
        if (!props.suppressHighlighting && isTouchable(props)) {
          setHighlighted(true);
        }
        setIsPressing(true);
        (_props$onResponderGra = props.onResponderGrant) === null || _props$onResponderGra === void 0 || _props$onResponderGra.call(props, event);
      },
      onResponderMove: event => {
        var _props$onResponderMov;
        (_props$onResponderMov = props.onResponderMove) === null || _props$onResponderMov === void 0 || _props$onResponderMov.call(props, event);
      },
      onResponderRelease: event => {
        var _props$onResponderRel;
        if (!props.suppressHighlighting && isTouchable(props)) {
          setHighlighted(false);
        }
        if (isPressing && props.onPress) {
          props.onPress(event);
        }
        setIsPressing(false);
        (_props$onResponderRel = props.onResponderRelease) === null || _props$onResponderRel === void 0 || _props$onResponderRel.call(props, event);
      },
      onResponderTerminate: event => {
        var _props$onResponderTer;
        if (!props.suppressHighlighting && isTouchable(props)) {
          setHighlighted(false);
        }
        setIsPressing(false);
        (_props$onResponderTer = props.onResponderTerminate) === null || _props$onResponderTer === void 0 || _props$onResponderTer.call(props, event);
      },
      onResponderTerminationRequest: () => {
        var _props$onResponderTer2;
        return ((_props$onResponderTer2 = props.onResponderTerminationRequest) === null || _props$onResponderTer2 === void 0 ? void 0 : _props$onResponderTer2.call(props)) ?? true;
      },
      onLongPress: props.onLongPress
    };
  }, [props, isPressing]);
  let selectionColor;
  if (props.selectionColor != null) {
    selectionColor = (0, _reactNative.processColor)(props.selectionColor);
  }
  const renderedProps = {
    ...props,
    ...(responseHandlers ?? {}),
    ref: forwardedRef,
    isHighlighted,
    selectionColor
  };
  if (isTouchable(props)) {
    renderedProps.isHighlighted = isHighlighted;
  }
  return /*#__PURE__*/React.createElement(RCTText, renderedProps);
});
TouchableText.displayName = 'TouchableText';
const AnimateableText = exports.AnimateableText = TouchableText;
//# sourceMappingURL=AnimateableText.js.map
    touchableRef.current.touchableGetPressRectOffset = () => props.pressRetentionOffset ?? PRESS_RECT_OFFSET;
  }, [hasAttachedTouchHandlers, props, setHighlighted, touchableRef]);
  const responseHandlers = (0, _react.useMemo)(() => {
    if (!isTouchable(props)) return undefined;
    return {
      onStartShouldSetResponder: () => {
        var _props$onStartShouldS;
        const shouldSet = (((_props$onStartShouldS = props.onStartShouldSetResponder) === null || _props$onStartShouldS === void 0 ? void 0 : _props$onStartShouldS.call(props)) ?? false) || isTouchable(props);
        if (shouldSet) {
          attachTouchHandlers();
        }
        return shouldSet;
      },
      onResponderGrant: event => {
        var _nullthrows, _props$onResponderGra;
        (_nullthrows = (0, _nullthrows5.default)(touchableRef.current.touchableHandleResponderGrant)) === null || _nullthrows === void 0 || _nullthrows(event);
        (_props$onResponderGra = props.onResponderGrant) === null || _props$onResponderGra === void 0 || _props$onResponderGra.call(props, event);
      },
      onResponderMove: event => {
        var _nullthrows2, _props$onResponderMov;
        (_nullthrows2 = (0, _nullthrows5.default)(touchableRef.current.touchableHandleResponderMove)) === null || _nullthrows2 === void 0 || _nullthrows2(event);
        (_props$onResponderMov = props.onResponderMove) === null || _props$onResponderMov === void 0 || _props$onResponderMov.call(props, event);
      },
      onResponderRelease: event => {
        var _nullthrows3, _props$onResponderRel;
        (_nullthrows3 = (0, _nullthrows5.default)(touchableRef.current.touchableHandleResponderRelease)) === null || _nullthrows3 === void 0 || _nullthrows3(event);
        (_props$onResponderRel = props.onResponderRelease) === null || _props$onResponderRel === void 0 || _props$onResponderRel.call(props, event);
      },
      onResponderTerminate: event => {
        var _nullthrows4, _props$onResponderTer;
        (_nullthrows4 = (0, _nullthrows5.default)(touchableRef.current.touchableHandleResponderTerminate)) === null || _nullthrows4 === void 0 || _nullthrows4(event);
        (_props$onResponderTer = props.onResponderTerminate) === null || _props$onResponderTer === void 0 || _props$onResponderTer.call(props, event);
      },
      onResponderTerminationRequest: () => {
        var _props$onResponderTer2;
        const defaultRequest = (0, _nullthrows5.default)(touchableRef.current.touchableHandleResponderTerminationRequest)();
        return ((_props$onResponderTer2 = props.onResponderTerminationRequest) === null || _props$onResponderTer2 === void 0 ? void 0 : _props$onResponderTer2.call(props)) ?? defaultRequest;
      }
    };
  }, [props, attachTouchHandlers]);
  let selectionColor;
  if (props.selectionColor != null) {
    selectionColor = (0, _reactNative.processColor)(props.selectionColor);
  }
  const renderedProps = {
    ...props,
    ...(responseHandlers ?? {}),
    ref: forwardedRef,
    isHighlighted,
    selectionColor
  };
  if (isTouchable(props)) {
    renderedProps.isHighlighted = isHighlighted;
  }
  if (__DEV__ && TouchableWithMixin.TOUCH_TARGET_DEBUG && props.onPress != null) {
    renderedProps.style = [props.style, {
      color: "magenta"
    }];
  }
  return /*#__PURE__*/_react.default.createElement(RCTText, {
    ...renderedProps
  });
});
TouchableText.displayName = "TouchableText";
const AnimateableText = exports.AnimateableText = TouchableText;
//# sourceMappingURL=AnimateableText.js.map