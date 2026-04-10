"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimateableText = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ReactNativeViewAttributes = _interopRequireDefault(require("react-native/Libraries/Components/View/ReactNativeViewAttributes"));
var _Touchable = _interopRequireDefault(require("react-native/Libraries/Components/Touchable/Touchable"));
var _createReactNativeComponentClass = _interopRequireDefault(require("react-native/Libraries/Renderer/shims/createReactNativeComponentClass"));
var _nullthrows5 = _interopRequireDefault(require("nullthrows"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// @ts-ignore

// @ts-ignore

const PRESS_RECT_OFFSET = {
  top: 20,
  left: 20,
  right: 20,
  bottom: 30
};
const viewConfig = {
  validAttributes: {
    ..._ReactNativeViewAttributes.default.UIView,
    isHighlighted: true,
    isPressable: true,
    numberOfLines: true,
    ellipsizeMode: true,
    allowFontScaling: true,
    dynamicTypeRamp: true,
    maxFontSizeMultiplier: true,
    disabled: true,
    selectable: true,
    selectionColor: true,
    adjustsFontSizeToFit: true,
    minimumFontScale: true,
    textBreakStrategy: true,
    onTextLayout: true,
    onInlineViewLayout: true,
    dataDetectorType: true,
    android_hyphenationFrequency: true,
    lineBreakStrategyIOS: true,
    text: true
  },
  directEventTypes: {
    topTextLayout: {
      registrationName: "onTextLayout"
    },
    topInlineViewLayout: {
      registrationName: "onInlineViewLayout"
    }
  },
  uiViewClassName: "JBAnimatedText"
};
const isTouchable = props => props.onPress != null || props.onLongPress != null || props.onStartShouldSetResponder != null;
const RCTText = (0, _createReactNativeComponentClass.default)(viewConfig.uiViewClassName, () => viewConfig);
const TouchableText = /*#__PURE__*/(0, _react.forwardRef)((props, forwardedRef) => {
  const [isHighlighted, setHighlighted] = (0, _react.useState)(false);
  const touchableRef = (0, _react.useRef)({});
  const hasAttachedTouchHandlers = (0, _react.useRef)(false);
  const TouchableWithMixin = _Touchable.default;
  const attachTouchHandlers = (0, _react.useCallback)(() => {
    if (hasAttachedTouchHandlers.current) return;
    hasAttachedTouchHandlers.current = true;
    for (const key in TouchableWithMixin.Mixin) {
      if (typeof TouchableWithMixin.Mixin[key] === "function") {
        touchableRef.current[key] = TouchableWithMixin.Mixin[key].bind(touchableRef.current);
      }
    }
    touchableRef.current.touchableHandleActivePressIn = () => {
      if (!props.suppressHighlighting && isTouchable(props)) {
        setHighlighted(true);
      }
    };
    touchableRef.current.touchableHandleActivePressOut = () => {
      if (!props.suppressHighlighting && isTouchable(props)) {
        setHighlighted(false);
      }
    };
    touchableRef.current.touchableHandlePress = event => {
      var _props$onPress;
      (_props$onPress = props.onPress) === null || _props$onPress === void 0 || _props$onPress.call(props, event);
    };
    touchableRef.current.touchableHandleLongPress = event => {
      var _props$onLongPress;
      (_props$onLongPress = props.onLongPress) === null || _props$onLongPress === void 0 || _props$onLongPress.call(props, event);
    };
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
  return /*#__PURE__*/_react.default.createElement(RCTText, renderedProps);
});
TouchableText.displayName = "TouchableText";
const AnimateableText = exports.AnimateableText = TouchableText;
//# sourceMappingURL=AnimateableText.js.map