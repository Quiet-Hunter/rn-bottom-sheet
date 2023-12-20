import React from "react";
import PropTypes from "prop-types";
import BottomSheetProps from "./types";
export declare const BottomSheet: {
    ({ close, children, title, hideCloseIcon, dragIconStyle, draggableAreaStyle, headerStyle, titleContainerStyle, titleStyle, initialY, dragThreshold, animDuration, }: BottomSheetProps): React.JSX.Element;
    propTypes: {
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
    defaultProps: {
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
};
export default BottomSheet;
