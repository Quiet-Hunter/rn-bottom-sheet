import { StyleProp, ViewStyle } from "react-native";
import PropTypes from "prop-types";
import { ANIM_DURATION, DRAG_THRESHOLD, INITIAL_Y } from "./constants";

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

export const propsTypes = {
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

export const defaultProps = {
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

export default BottomSheetProps;
