import { StyleProp, ViewStyle } from "react-native";

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

export default BottomSheetProps;
