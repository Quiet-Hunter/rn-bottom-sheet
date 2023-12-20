declare const styles: {
    bottomSheet: {
        position: "absolute";
        backgroundColor: string;
        borderTopEndRadius: number;
        borderTopStartRadius: number;
        padding: number;
        paddingTop: number;
        paddingBottom: number;
        bottom: number;
        width: "100%";
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
        zIndex: number;
    };
    draggableArea: {
        width: "100%";
        height: number;
        alignItems: "center";
        justifyContent: "flex-start";
    };
    dragPointer: {
        width: number;
        height: number;
        marginTop: number;
        borderRadius: number;
        backgroundColor: string;
    };
    bottomSheetHeader: {
        display: "flex";
        flexDirection: "row";
    };
    bottomSheetTitle: {
        fontSize: number;
        fontWeight: "700";
        color: string;
        paddingLeft: number;
    };
    bottomSheetTitleContainer: {
        flex: number;
        display: "flex";
        flexDirection: "row";
        alignItems: "center";
        alignContent: "center";
        justifyContent: "center";
    };
    closeIcon: {
        width: number;
        height: number;
    };
};
export default styles;
