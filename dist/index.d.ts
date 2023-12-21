import React from "react";
import BottomSheetProps from "./types";
export declare const BottomSheet: {
    ({ close, children, title, hideCloseIcon, dragIconStyle, draggableAreaStyle, headerStyle, titleContainerStyle, titleStyle, initialY, dragThreshold, animDuration, }: BottomSheetProps): React.JSX.Element;
    propTypes: {
        close: import("prop-types").Validator<(...args: any[]) => any>;
        children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
        title: import("prop-types").Requireable<string>;
        hideCloseIcon: import("prop-types").Requireable<boolean>;
        dragIconStyle: import("prop-types").Requireable<object>;
        draggableAreaStyle: import("prop-types").Requireable<object>;
        headerStyle: import("prop-types").Requireable<object>;
        titleContainerStyle: import("prop-types").Requireable<object>;
        titleStyle: import("prop-types").Requireable<object>;
        initialY: import("prop-types").Requireable<number>;
        dragThreshold: import("prop-types").Requireable<number>;
        animDuration: import("prop-types").Requireable<number>;
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
