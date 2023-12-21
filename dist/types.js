"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultProps = exports.propsTypes = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var constants_1 = require("./constants");
exports.propsTypes = {
    close: prop_types_1.default.func.isRequired,
    children: prop_types_1.default.node,
    title: prop_types_1.default.string,
    hideCloseIcon: prop_types_1.default.bool,
    dragIconStyle: prop_types_1.default.object,
    draggableAreaStyle: prop_types_1.default.object,
    headerStyle: prop_types_1.default.object,
    titleContainerStyle: prop_types_1.default.object,
    titleStyle: prop_types_1.default.object,
    initialY: prop_types_1.default.number,
    dragThreshold: prop_types_1.default.number,
    animDuration: prop_types_1.default.number,
};
exports.defaultProps = {
    children: null,
    title: "",
    hideCloseIcon: false,
    dragIconStyle: {},
    draggableAreaStyle: {},
    headerStyle: {},
    titleContainerStyle: {},
    titleStyle: {},
    initialY: constants_1.INITIAL_Y,
    dragThreshold: constants_1.DRAG_THRESHOLD,
    animDuration: constants_1.ANIM_DURATION,
};
