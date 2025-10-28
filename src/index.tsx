import Animated from 'react-native-reanimated';
import { AnimateableText as RawAnimateableText } from './AnimateableText';

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

const AnimateableText: ReturnType<
  typeof Animated.createAnimatedComponent<typeof RawAnimateableText>
> = Animated.createAnimatedComponent(RawAnimateableText);

export default AnimateableText;
