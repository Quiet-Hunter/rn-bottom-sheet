import React, {useEffect, useRef, useCallback} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
  Image,
  Animated,
  View,
  StyleSheet,
  PanResponder,
  StyleProp,
  ViewStyle,
} from 'react-native';

const closeIcon = require('./close.png');

const INITIAL_Y = 400;
const DRAG_THRESHOLD = 100;
const ANIM_DURATION = 200;

type BottomSheetProps = {
  close: () => void;
  children?: React.ReactNode;
  title?: string;
  hideCloseIcon?: boolean;
  dragIconStyle?: StyleProp<ViewStyle>;
  draggableAreaStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  initialY?: number;
  dragThreshold?: number;
  animDuration?: number;
};

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
  const slideAnim = useRef(new Animated.ValueXY({x: 0, y: initialY})).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: {x: 0, y: 0},
      duration: animDuration,
      useNativeDriver: true,
    }).start();
  }, [animDuration, slideAnim]);

  const handleClose = useCallback(() => {
    Animated.timing(slideAnim, {
      toValue: {x: 0, y: initialY},
      duration: animDuration,
      useNativeDriver: true,
    }).start(() => close());
  }, [animDuration, close, initialY, slideAnim]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > -50) {
          slideAnim.setValue({x: 0, y: Math.min(gestureState.dy, initialY)});
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > dragThreshold) {
          handleClose();
        } else {
          Animated.spring(slideAnim, {
            toValue: {x: 0, y: 0},
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <Animated.View
      style={[
        styles.bottomSheet,
        {transform: slideAnim.getTranslateTransform()},
      ]}>
      <View
        {...panResponder.panHandlers}
        style={StyleSheet.flatten([styles.draggableArea, draggableAreaStyle])}>
        <View style={StyleSheet.flatten([styles.dragPointer, dragIconStyle])} />
      </View>
      <View style={StyleSheet.flatten([styles.bottomSheetHeader, headerStyle])}>
        <View
          style={StyleSheet.flatten([
            styles.bottomSheetTitleContainer,
            titleContainerStyle,
          ])}>
          <Text
            style={StyleSheet.flatten([styles.bottomSheetTitle, titleStyle])}>
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
  title: '',
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

const styles = StyleSheet.create({
  bottomSheet: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopEndRadius: 32,
    borderTopStartRadius: 32,
    padding: 20,
    paddingTop: 0,
    paddingBottom: 170,
    bottom: -150,
    width: '100%',
    shadowColor: '#000',
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
    width: '100%',
    height: 32,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dragPointer: {
    width: 40,
    height: 4,
    marginTop: 4,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  bottomSheetHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    paddingLeft: 24,
  },
  bottomSheetTitleContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  closeIcon: {width: 24, height: 24},
});
