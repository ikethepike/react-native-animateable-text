import type { ViewProps, ColorValue } from 'react-native';
import type { Int32, Double } from 'react-native/Libraries/Types/CodegenTypes';
interface NativeProps extends ViewProps {
    text?: string;
    color?: ColorValue;
    fontSize?: Double;
    fontFamily?: string;
    fontWeight?: string;
    fontStyle?: string;
    textAlign?: string;
    numberOfLines?: Int32;
    lineHeight?: Double;
    letterSpacing?: Double;
    textDecorationLine?: string;
}
declare const _default: import("react-native/Libraries/Utilities/codegenNativeComponent").NativeComponentType<NativeProps>;
export default _default;
//# sourceMappingURL=JBAnimatedTextNativeComponent.d.ts.map