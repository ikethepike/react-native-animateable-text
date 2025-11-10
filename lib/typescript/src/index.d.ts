import type { AnimatedProps } from 'react-native-reanimated';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { AnimateableTextProps } from './TextProps';
import type { Text as IText } from 'react-native';
declare const AnimateableText: ForwardRefExoticComponent<AnimatedProps<AnimateableTextProps & RefAttributes<IText>> & {
    animatedProps?: Partial<{
        text: string;
    }>;
}>;
export default AnimateableText;
//# sourceMappingURL=index.d.ts.map