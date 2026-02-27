import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, QUATERNARY_COLOR, QUINARY_COLOR, SECONDARY_COLOR, SENARY_COLOR, TERTIARY_COLOR } from "../common/const";

export const stylesGlobal = StyleSheet.create({
    //estilos generales
    containerBody: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 40,
        backgroundColor: PRIMARY_COLOR,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    text: {
        textAlign: 'center',
        color: SECONDARY_COLOR,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
    },
    subtitulo: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 15,
    },
    textRegistro: {
        fontSize: 13,
        marginTop: 14,
        color: TERTIARY_COLOR
    },
    inputs: {
        borderColor: QUATERNARY_COLOR,
        width: 300,
        height: 60,
        borderWidth: 1,
        elevation: 8,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: QUINARY_COLOR,
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    inputText: {
        color: SECONDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        borderColor: QUATERNARY_COLOR,
        width: 300,
        height: 65,
        borderRadius: 45,
        elevation: 10,
        shadowColor: QUATERNARY_COLOR,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonTextMostrar: {
        color: SECONDARY_COLOR,
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    containerInput: {
        marginVertical: 10,
    },
    buttonOtrasRedes: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginVertical: 10,
    },
    buttonText: {
        color: SECONDARY_COLOR,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image: {
        width: 40,
        height: 40
    },
    IconPasswordRegister: {
        position: 'absolute',
        bottom: 109,
        right: 19,
    },
    IconPasswordLogin: {
        position: 'absolute',
        bottom: 29,
        right: 19,
    },
    IconPasswordConf: {
        position: 'absolute',
        bottom: 29,
        right: 19,
    },
    textRedirect: {
        marginTop: 20,
        fontSize: 15,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    //estilos de home
    containerHome: {
        flex: 1,
        backgroundColor: QUINARY_COLOR,
    },
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    iconHome: {
        alignItems: 'center',
    },
    textIconCart: {
        backgroundColor: SECONDARY_COLOR,
        paddingHorizontal: 5,
        borderRadius: 10,
        fontWeight: 'bold',
        fontSize: 13,
        position: 'absolute',
        top: -8,
        right: -8,
        zIndex: 1,
    },

    //estilos de cardcomponent
    containerCard: {
        flexDirection: 'row',
        backgroundColor: SENARY_COLOR,
        marginBottom: 15,
        padding: 12,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    contentCard: {
        flex: 1,
        paddingRight: 15,
    },
    priceContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageCard: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10,
    },
    textGender: {
        fontSize: 13,
        fontWeight: '600',
        color: TERTIARY_COLOR,
    },
    textPriceCard: {
        fontSize: 24,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
        marginBottom: 8,
    },
    titleCard: {
        fontSize: 20,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
        marginBottom: 3,
    },

    //estilos de modal
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    bodyModal: {
        padding: 20,
        backgroundColor: SENARY_COLOR,
        borderRadius: 15,
        elevation: 10,
        borderWidth: 1,
        borderColor: QUATERNARY_COLOR,
    },
    headerModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: PRIMARY_COLOR,
        paddingBottom: 15,
        marginBottom: 15,
    },
    titleModal: {
        fontWeight: 'bold',
        fontSize: 22,
        color: SECONDARY_COLOR,
        flex: 1,
        marginRight: 10,
    },
    containerImageModal: {
        alignItems: 'center',
        marginBottom: 15,
    },
    imageModal: {
        width: '100%',
        height: 160,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    infoContainerModal: {
        marginBottom: 20,
    },
    textModal: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        marginBottom: 5,
    },
    footerModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    textTotalPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: TERTIARY_COLOR,
    },
    buttonModal: {
        backgroundColor: TERTIARY_COLOR,
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonModalText: {
        color: PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: 'bold',
    },

    //estilos del carrito
    carItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR,
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
    },
    cartItemInfo: {
        flex: 1,
        paddingRight: 10,
    },
    cartItemName: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    cartItemPrice: {
        color: TERTIARY_COLOR,
        fontWeight: 'bold',
        fontSize: 14,
    },
    deleteButton: {
        padding: 5,
    },
    containerTotalPay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: PRIMARY_COLOR,
        paddingTop: 15,
        marginVertical: 15,
    },
    textTotalPayLabel: {
        fontSize: 18,
        color: SECONDARY_COLOR,
    },
    textTotalPayValue: {
        fontWeight: 'bold',
        fontSize: 24,
        color: TERTIARY_COLOR,
    },
});