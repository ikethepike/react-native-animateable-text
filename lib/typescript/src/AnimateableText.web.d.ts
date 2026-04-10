import * as React from 'react';
import { Text } from 'react-native';
export declare const AnimateableText: React.ForwardRefExoticComponent<Omit<import("react-native").TextProps, "children"> & {
    forwardedRef?: React.Ref<Text>;
    text?: string;
    onStartShouldSetResponder?: () => boolean;
    onResponderGrant?: (event: import("react-native").GestureResponderEvent) => void;
    onResponderMove?: (event: import("react-native").GestureResponderEvent) => void;
    onResponderRelease?: (event: import("react-native").GestureResponderEvent) => void;
    onResponderTerminate?: (event: import("react-native").GestureResponderEvent) => void;
    onResponderTerminationRequest?: () => boolean;
    suppressHighlighting?: boolean;
    pressRetentionOffset?: {
        top: number;
        left: number;
        bottom: number;
        right: number;
    };
} & React.RefAttributes<unknown>>;
//# sourceMappingURL=AnimateableText.web.d.ts.map