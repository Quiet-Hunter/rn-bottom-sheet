"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
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
exports.default = styles;
