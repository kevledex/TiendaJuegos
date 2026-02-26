import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, QUATERNARY_COLOR, QUINARY_COLOR, SECONDARY_COLOR, SENARY_COLOR, TERTIARY_COLOR } from "../common/const";

export const stylesGlobal = StyleSheet.create({
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

    headerModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        paddingBottom: 8,
        marginBottom: 15,
        width: '100%',
    },

    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
    bodyModal: {
        padding: 20,
        backgroundColor: SENARY_COLOR,
        borderRadius: 10
    },
    
    titleModal: {
        fontWeight: 'bold',
        fontSize: 24,
        color: SECONDARY_COLOR,
        marginBottom: 15,
        
    },

    textModal: {
        fontWeight: 'bold',
        fontSize: 15,
        color: SECONDARY_COLOR,
        marginBottom: 5,
        marginTop: 5,
    },

    textTotalPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        alignSelf:'flex-start',
        padding: 5,
        borderRadius: 6,
        color: '#beee11',
        backgroundColor: '#4c6b22',
        
    },

    buttonModal: {
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        margin: 15
    },
    buttonModalText: {
        textAlign: 'center',
        color: SECONDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold'
    },
    





//copia de los estilos de la profe 
    
    containerQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonQuantity: {
        backgroundColor: TERTIARY_COLOR,
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    buttonQuantityText: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },

    textStock: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#AB1818',
        textAlign: 'center'
    },
    
    iconCard: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 2
    },
    
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerDescription: {
        flexDirection: 'row'
    },
    headerTextTable: {
        fontWeight: 'bold',
        fontSize: 15,
        color: PRIMARY_COLOR
    },
    containerTotalPay: {
        alignItems: 'flex-end',
        marginVertical: 15
    },
    textTotalPay: {
        fontWeight: 'bold',
        fontSize: 18,
        color: PRIMARY_COLOR
    }
});