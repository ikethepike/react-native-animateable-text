import type { Ref } from "react";
import type { TextProps as NativeTextProps, Text as IText, GestureResponderEvent } from "react-native";
export type AnimateableTextProps = Omit<NativeTextProps, "children"> & {
    forwardedRef?: Ref<IText>;
    text?: string;
    onStartShouldSetResponder?: () => boolean;
    onResponderGrant?: (event: GestureResponderEvent) => void;
    onResponderMove?: (event: GestureResponderEvent) => void;
    onResponderRelease?: (event: GestureResponderEvent) => void;
    onResponderTerminate?: (event: GestureResponderEvent) => void;
    onResponderTerminationRequest?: () => boolean;
    suppressHighlighting?: boolean;
    pressRetentionOffset?: {
        top: number;
        left: number;
        bottom: number;
        right: number;
    };
};
//# sourceMappingURL=TextProps.d.ts.map