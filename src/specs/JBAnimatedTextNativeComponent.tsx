/*
 * Custom -> used only for codegen
 */

import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { ViewProps, ColorValue } from 'react-native';

interface NativeProps extends ViewProps {
  text?: string;
  color?: ColorValue;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: string;
  textAlign?: string;
  numberOfLines?: number;
  lineHeight?: number;
  textDecorationLine?: string;
}

export default codegenNativeComponent<NativeProps>('JBAnimatedText');
