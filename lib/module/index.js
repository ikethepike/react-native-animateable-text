import Animated from 'react-native-reanimated';
import { AnimateableText as RawAnimateableText } from './AnimateableText';
Animated.addWhitelistedNativeProps({
  text: true
});
const AnimateableText = Animated.createAnimatedComponent(RawAnimateableText);
export default AnimateableText;
//# sourceMappingURL=index.js.map: true,
  letterSpacing: true,
  textDecorationLine: true
});
const AnimateableTextComponent = Animated.createAnimatedComponent(RawAnimateableText);

// Cast to properly typed component that supports animatedProps with text
const AnimateableText = AnimateableTextComponent;
export default AnimateableText;
//# sourceMappingURL=index.js.map