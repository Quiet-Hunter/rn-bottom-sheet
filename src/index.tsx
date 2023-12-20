import React, { useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
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
import BottomSheetProps from "./types";

const closeIcon = require("./img/close.png");

const INITIAL_Y = 400;
const DRAG_THRESHOLD = 100;
const ANIM_DURATION = 200;

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

BottomSheet.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node,
  title: PropTypes.string,
  hideCloseIcon: PropTypes.bool,
  dragIconStyle: PropTypes.object,
  draggableAreaStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  titleContainerStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  initialY: PropTypes.number,
  dragThreshold: PropTypes.number,
  animDuration: PropTypes.number,
};

BottomSheet.defaultProps = {
  children: null,
  title: "",
  hideCloseIcon: false,
  dragIconStyle: {},
  draggableAreaStyle: {},
  headerStyle: {},
  titleContainerStyle: {},
  titleStyle: {},
  initialY: INITIAL_Y,
  dragThreshold: DRAG_THRESHOLD,
  animDuration: ANIM_DURATION,
};

export default BottomSheet;
