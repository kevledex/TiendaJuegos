import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, QUATERNARY_COLOR, QUINARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../common/const";

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
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 5,
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
    }
});