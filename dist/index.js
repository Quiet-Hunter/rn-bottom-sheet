"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomSheet = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles_1 = __importDefault(require("./styles"));
var types_1 = require("./types");
var constants_1 = require("./constants");
var closeIcon = require("./img/close.png");
var BottomSheet = function (_a) {
    var close = _a.close, children = _a.children, title = _a.title, hideCloseIcon = _a.hideCloseIcon, dragIconStyle = _a.dragIconStyle, draggableAreaStyle = _a.draggableAreaStyle, headerStyle = _a.headerStyle, titleContainerStyle = _a.titleContainerStyle, titleStyle = _a.titleStyle, _b = _a.initialY, initialY = _b === void 0 ? constants_1.INITIAL_Y : _b, _c = _a.dragThreshold, dragThreshold = _c === void 0 ? constants_1.DRAG_THRESHOLD : _c, _d = _a.animDuration, animDuration = _d === void 0 ? constants_1.ANIM_DURATION : _d;
    var slideAnim = (0, react_1.useRef)(new react_native_1.Animated.ValueXY({ x: 0, y: initialY })).current;
    (0, react_1.useEffect)(function () {
        react_native_1.Animated.timing(slideAnim, {
            toValue: { x: 0, y: 0 },
            duration: animDuration,
            useNativeDriver: true,
        }).start();
    }, [animDuration, slideAnim]);
    var handleClose = (0, react_1.useCallback)(function () {
        react_native_1.Animated.timing(slideAnim, {
            toValue: { x: 0, y: initialY },
            duration: animDuration,
            useNativeDriver: true,
        }).start(function () { return close(); });
    }, [animDuration, close, initialY, slideAnim]);
    var panResponder = (0, react_1.useRef)(react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: function () { return true; },
        onPanResponderMove: function (event, gestureState) {
            if (gestureState.dy > -50) {
                slideAnim.setValue({ x: 0, y: Math.min(gestureState.dy, initialY) });
            }
        },
        onPanResponderRelease: function (event, gestureState) {
            if (gestureState.dy > dragThreshold) {
                handleClose();
            }
            else {
                react_native_1.Animated.spring(slideAnim, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true,
                }).start();
            }
        },
    })).current;
    return (<react_native_1.Animated.View style={[
            styles_1.default.bottomSheet,
            { transform: slideAnim.getTranslateTransform() },
        ]}>
      <react_native_1.View {...panResponder.panHandlers} style={react_native_1.StyleSheet.flatten([styles_1.default.draggableArea, draggableAreaStyle])}>
        <react_native_1.View style={react_native_1.StyleSheet.flatten([styles_1.default.dragPointer, dragIconStyle])}/>
      </react_native_1.View>
      <react_native_1.View style={react_native_1.StyleSheet.flatten([styles_1.default.bottomSheetHeader, headerStyle])}>
        <react_native_1.View style={react_native_1.StyleSheet.flatten([
            styles_1.default.bottomSheetTitleContainer,
            titleContainerStyle,
        ])}>
          <react_native_1.Text style={react_native_1.StyleSheet.flatten([styles_1.default.bottomSheetTitle, titleStyle])}>
            {title}
          </react_native_1.Text>
        </react_native_1.View>
        {!hideCloseIcon && (<react_native_1.TouchableOpacity onPress={handleClose}>
            <react_native_1.Image source={closeIcon} style={styles_1.default.closeIcon}/>
          </react_native_1.TouchableOpacity>)}
      </react_native_1.View>
      <react_native_1.View>{children}</react_native_1.View>
    </react_native_1.Animated.View>);
};
exports.BottomSheet = BottomSheet;
exports.BottomSheet.propTypes = types_1.propsTypes;
exports.BottomSheet.defaultProps = types_1.defaultProps;
exports.default = exports.BottomSheet;
