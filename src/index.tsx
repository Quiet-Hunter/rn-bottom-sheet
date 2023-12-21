import React, { useEffect, useRef, useCallback } from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  Animated,
  View,
  StyleSheet,
  PanResponder,
} from "react-native";
import styles from "./styles";
import BottomSheetProps, { propsTypes, defaultProps } from "./types";
import { ANIM_DURATION, DRAG_THRESHOLD, INITIAL_Y } from "./constants";

const closeIcon = require("./img/close.png");

export const BottomSheet = ({
  close,
  children,
  title,
  hideCloseIcon,
  dragIconStyle,
  draggableAreaStyle,
  headerStyle,
  titleContainerStyle,
  titleStyle,
  initialY = INITIAL_Y,
  dragThreshold = DRAG_THRESHOLD,
  animDuration = ANIM_DURATION,
}: BottomSheetProps) => {
  const slideAnim = useRef(new Animated.ValueXY({ x: 0, y: initialY })).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: { x: 0, y: 0 },
      duration: animDuration,
      useNativeDriver: true,
    }).start();
  }, [animDuration, slideAnim]);

  const handleClose = useCallback(() => {
    Animated.timing(slideAnim, {
      toValue: { x: 0, y: initialY },
      duration: animDuration,
      useNativeDriver: true,
    }).start(() => close());
  }, [animDuration, close, initialY, slideAnim]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > -50) {
          slideAnim.setValue({ x: 0, y: Math.min(gestureState.dy, initialY) });
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > dragThreshold) {
          handleClose();
        } else {
          Animated.spring(slideAnim, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={[
        styles.bottomSheet,
        { transform: slideAnim.getTranslateTransform() },
      ]}
    >
      <View
        {...panResponder.panHandlers}
        style={StyleSheet.flatten([styles.draggableArea, draggableAreaStyle])}
      >
        <View style={StyleSheet.flatten([styles.dragPointer, dragIconStyle])} />
      </View>
      <View style={StyleSheet.flatten([styles.bottomSheetHeader, headerStyle])}>
        <View
          style={StyleSheet.flatten([
            styles.bottomSheetTitleContainer,
            titleContainerStyle,
          ])}
        >
          <Text
            style={StyleSheet.flatten([styles.bottomSheetTitle, titleStyle])}
          >
            {title}
          </Text>
        </View>
        {!hideCloseIcon && (
          <TouchableOpacity onPress={handleClose}>
            <Image source={closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>
        )}
      </View>
      <View>{children}</View>
    </Animated.View>
  );
};

BottomSheet.propTypes = propsTypes;

BottomSheet.defaultProps = defaultProps;

export default BottomSheet;
