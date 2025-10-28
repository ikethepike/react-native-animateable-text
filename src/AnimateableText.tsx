import * as React from 'react';
import type { Ref, ForwardRefExoticComponent, RefAttributes } from 'react';
import { forwardRef, useMemo, useState } from 'react';
import {
  type GestureResponderEvent,
  processColor,
  requireNativeComponent,
} from 'react-native';
import type { AnimateableTextProps } from './TextProps';
import type { Text as IText } from 'react-native';

const isTouchable = (props: AnimateableTextProps): boolean =>
  props.onPress != null ||
  props.onLongPress != null ||
  props.onStartShouldSetResponder != null;

const RCTText = requireNativeComponent<AnimateableTextProps>('JBAnimatedText');

const TouchableText = forwardRef<IText, AnimateableTextProps>(
  (props, forwardedRef) => {
    const [isHighlighted, setHighlighted] = useState(false);
    const [isPressing, setIsPressing] = useState(false);

    const responseHandlers = useMemo(() => {
      if (!isTouchable(props)) return undefined;

      return {
        onStartShouldSetResponder: (): boolean =>
          (props.onStartShouldSetResponder?.() ?? false) || isTouchable(props),
        onResponderGrant: (event: GestureResponderEvent) => {
          if (!props.suppressHighlighting && isTouchable(props)) {
            setHighlighted(true);
          }
          setIsPressing(true);
          props.onResponderGrant?.(event);
        },
        onResponderMove: (event: GestureResponderEvent) => {
          props.onResponderMove?.(event);
        },
        onResponderRelease: (event: GestureResponderEvent) => {
          if (!props.suppressHighlighting && isTouchable(props)) {
            setHighlighted(false);
          }
          if (isPressing && props.onPress) {
            props.onPress(event);
          }
          setIsPressing(false);
          props.onResponderRelease?.(event);
        },
        onResponderTerminate: (event: GestureResponderEvent) => {
          if (!props.suppressHighlighting && isTouchable(props)) {
            setHighlighted(false);
          }
          setIsPressing(false);
          props.onResponderTerminate?.(event);
        },
        onResponderTerminationRequest: (): boolean => {
          return props.onResponderTerminationRequest?.() ?? true;
        },
        onLongPress: props.onLongPress,
      };
    }, [props, isPressing]);

    let selectionColor: (symbol & { __TYPE__: 'Color' }) | undefined;
    if (props.selectionColor != null) {
      selectionColor = processColor(props.selectionColor) as
        | (symbol & { __TYPE__: 'Color' })
        | undefined;
    }

    const renderedProps: AnimateableTextProps & {
      ref: Ref<IText>;
      isHighlighted: boolean;
      selectionColor: (symbol & { __TYPE__: 'Color' }) | undefined;
    } = {
      ...props,
      ...(responseHandlers ?? {}),
      ref: forwardedRef,
      isHighlighted,
      selectionColor,
    };

    if (isTouchable(props)) {
      renderedProps.isHighlighted = isHighlighted;
    }

    return <RCTText {...renderedProps} />;
  }
);

TouchableText.displayName = 'TouchableText';

export const AnimateableText =
  TouchableText as unknown as ForwardRefExoticComponent<
    AnimateableTextProps & RefAttributes<IText>
  >;
