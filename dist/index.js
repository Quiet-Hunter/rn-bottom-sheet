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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomSheet = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var closeIcon = require("./img/close.png");
var INITIAL_Y = 400;
var DRAG_THRESHOLD = 100;
var ANIM_DURATION = 200;
var BottomSheet = function (_a) {
    var close = _a.close, children = _a.children, _b = _a.title, title = _b === void 0 ? "" : _b;
    var slideAnim = (0, react_1.useRef)(new react_native_1.Animated.ValueXY({ x: 0, y: INITIAL_Y })).current;
    (0, react_1.useEffect)(function () {
        react_native_1.Animated.timing(slideAnim, {
            toValue: { x: 0, y: 0 },
            duration: ANIM_DURATION,
            useNativeDriver: true,
        }).start();
    }, [slideAnim]);
    var handleClose = function () {
        react_native_1.Animated.timing(slideAnim, {
            toValue: { x: 0, y: INITIAL_Y },
            duration: ANIM_DURATION,
            useNativeDriver: true,
        }).start(function () { return close(); });
    };
    var panResponder = (0, react_1.useRef)(react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: function () { return true; },
        onPanResponderMove: function (event, gestureState) {
            if (gestureState.dy > -50) {
                slideAnim.setValue({ x: 0, y: Math.min(gestureState.dy, INITIAL_Y) });
            }
        },
        onPanResponderRelease: function (event, gestureState) {
            if (gestureState.dy > DRAG_THRESHOLD) {
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
            styles.bottomSheet,
            { transform: slideAnim.getTranslateTransform() },
        ]}>
      <react_native_1.View {...panResponder.panHandlers} style={styles.draggableArea}>
        <react_native_1.View style={styles.dragPointer}/>
      </react_native_1.View>
      <react_native_1.View style={styles.bottomSheetHeader}>
        <react_native_1.View style={styles.bottomSheetTitleContainer}>
          <react_native_1.Text style={styles.bottomSheetTitle}>{title}</react_native_1.Text>
        </react_native_1.View>
        <react_native_1.TouchableOpacity onPress={handleClose}>
          <react_native_1.Image source={closeIcon} style={styles.closeIcon}/>
        </react_native_1.TouchableOpacity>
      </react_native_1.View>
      <react_native_1.View>{children}</react_native_1.View>
    </react_native_1.Animated.View>);
};
exports.BottomSheet = BottomSheet;
exports.default = exports.BottomSheet;
var styles = react_native_1.StyleSheet.create({
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
