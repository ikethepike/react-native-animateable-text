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
  textDecorationLine: true,
});

const AnimateableText = Animated.createAnimatedComponent(RawAnimateableText);

export default AnimateableText;
