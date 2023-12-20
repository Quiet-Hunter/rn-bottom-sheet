import React, { useEffect, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  Animated,
  View,
  StyleSheet,
  PanResponder,
} from "react-native";
const closeIcon = require("./img/close.png");

const INITIAL_Y = 400;
const DRAG_THRESHOLD = 100;
const ANIM_DURATION = 200;

export const BottomSheet = ({
  close,
  children,
  title = "",
}: {
  close: () => void;
  children: any;
  title?: string;
}) => {
  const slideAnim = useRef(
    new Animated.ValueXY({ x: 0, y: INITIAL_Y })
  ).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: { x: 0, y: 0 },
      duration: ANIM_DURATION,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: { x: 0, y: INITIAL_Y },
      duration: ANIM_DURATION,
      useNativeDriver: true,
    }).start(() => close());
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > -50) {
          slideAnim.setValue({ x: 0, y: Math.min(gestureState.dy, INITIAL_Y) });
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > DRAG_THRESHOLD) {
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
      <View {...panResponder.panHandlers} style={styles.draggableArea}>
        <View style={styles.dragPointer} />
      </View>
      <View style={styles.bottomSheetHeader}>
        <View style={styles.bottomSheetTitleContainer}>
          <Text style={styles.bottomSheetTitle}>{title}</Text>
        </View>
        <TouchableOpacity onPress={handleClose}>
          <Image source={closeIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View>{children}</View>
    </Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    position: "absolute",
    backgroundColor: "#fff",
    borderTopEndRadius: 32,
    borderTopStartRadius: 32,
    padding: 20,
    paddingTop: 0,
    paddingBottom: 170,
    bottom: -150,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: -1,
      height: -3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    zIndex: 2,
  },
  draggableArea: {
    width: "100%",
    height: 32,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dragPointer: {
    width: 40,
    height: 4,
    marginTop: 4,
    borderRadius: 10,
    backgroundColor: "#000",
  },
  bottomSheetHeader: {
    display: "flex",
    flexDirection: "row",
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    paddingLeft: 24,
  },
  bottomSheetTitleContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  closeIcon: { width: 24, height: 24 },
});
