import Animated from 'react-native-reanimated';
import type { AnimatedProps } from 'react-native-reanimated';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { AnimateableText as RawAnimateableText } from './AnimateableText';
import type { AnimateableTextProps } from './TextProps';
import type { Text as IText } from 'react-native';

Animated.addWhitelistedNativeProps({
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
  textDecorationLine: true,
});

const AnimateableTextComponent = Animated.createAnimatedComponent(RawAnimateableText);

// Cast to properly typed component that supports animatedProps with text
const AnimateableText = AnimateableTextComponent as ForwardRefExoticComponent<
  AnimatedProps<AnimateableTextProps & RefAttributes<IText>> & {
    animatedProps?: Partial<{ text: string }>;
  }
>;

export default AnimateableText;
