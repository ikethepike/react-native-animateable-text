declare const AnimateableText: import("react").FunctionComponent<import("react-native-reanimated").AnimateProps<Omit<import("react-native").TextProps, "children"> & {
    forwardedRef?: import("react").Ref<import("react-native").Text>;
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
} & import("react").RefAttributes<import("react-native").Text>>>;
export default AnimateableText;
//# sourceMappingURL=index.d.ts.map