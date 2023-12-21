/// <reference types="react" />
import { StyleProp, ViewStyle } from "react-native";
import PropTypes from "prop-types";
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
export declare const propsTypes: {
    close: PropTypes.Validator<(...args: any[]) => any>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    title: PropTypes.Requireable<string>;
    hideCloseIcon: PropTypes.Requireable<boolean>;
    dragIconStyle: PropTypes.Requireable<object>;
    draggableAreaStyle: PropTypes.Requireable<object>;
    headerStyle: PropTypes.Requireable<object>;
    titleContainerStyle: PropTypes.Requireable<object>;
    titleStyle: PropTypes.Requireable<object>;
    initialY: PropTypes.Requireable<number>;
    dragThreshold: PropTypes.Requireable<number>;
    animDuration: PropTypes.Requireable<number>;
};
export declare const defaultProps: {
    children: null;
    title: string;
    hideCloseIcon: boolean;
    dragIconStyle: {};
    draggableAreaStyle: {};
    headerStyle: {};
    titleContainerStyle: {};
    titleStyle: {};
    initialY: number;
    dragThreshold: number;
    animDuration: number;
};
export default BottomSheetProps;
