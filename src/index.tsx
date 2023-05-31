/*export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}*/

import React, { useCallback, useEffect, useImperativeHandle } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
type BottomSheetProps = {
  children?: React.ReactNode;
  OnOpen: () => void;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  onClose: () => void;
  isActive: () => boolean;
};
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  ({ children, OnOpen }, ref) => {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);
    const scrollTo = useCallback((destination: number) => {
      'worklet';
      active.value = destination !== 0;
      translateY.value = withSpring(destination, { damping: 50 });
    }, []);
    const onClose = useCallback(() => {
      'worklet';
      scrollTo(0);
    }, []);
    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive, onClose }), [
      scrollTo,
      isActive,
      onClose,
    ]);
    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = { y: translateY.value };
        console.log('started');
      })
      .onUpdate((event) => {
        console.log(event.translationY);
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);

        if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(-SCREEN_HEIGHT / 8);
        }
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
          // scrollTo(0);
        } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
          //  scrollTo(MAX_TRANSLATE_Y);
        }
      });
    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolate.CLAMP
      );
      return {
        borderRadius,
        transform: [{ translateY: translateY.value }],
      };
    });
    useEffect(() => {
      //scrollTo(-SCREEN_HEIGHT / 3);
    }, []);
    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
          <StatusBar />
          <TouchableOpacity onPress={OnOpen}>
            <Text>press</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          {children}
        </Animated.View>
      </GestureDetector>
    );
  }
);
const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    backgroundColor: 'grey',
    width: 75,
    height: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
});
export default BottomSheet;
