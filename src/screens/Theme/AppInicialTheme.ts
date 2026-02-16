import { StyleSheet } from "react-native";

export const stylesRegistro = StyleSheet.create({
    container: {
        backgroundColor: '#0F172A',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 40,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitulo: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 30,
    },
    textRegistro: {
        fontSize: 13,
        marginTop: 14,
        color: '#00ccff'
    },
    inputs: {
        borderColor: '#00a2ff',
        width: 300,
        height: 60,
        borderWidth: 1,
        elevation: 8,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#070f22',
        marginVertical: 10,
    },

    inputCrear: {
        borderColor: '#00a2ff',
        width: 300,
        height: 65,
        borderRadius: 45,
        elevation: 10,
        shadowColor: '#00a2ff',
        marginTop: 20,
        marginBottom: 20,
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
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})