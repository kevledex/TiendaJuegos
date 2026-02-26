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

    containerHome: {
        
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

    buttonMostar: {
        backgroundColor: SENARY_COLOR,
        borderColor: TERTIARY_COLOR ,
        width: 140,
        height: 40,
        borderRadius: 10,
        elevation: 10,
        shadowColor: QUATERNARY_COLOR,
        margin: 20,
        alignSelf:'center'
        
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

    IconPasswordRegister:{
        
        position: 'absolute',
        bottom: 109,
        right: 19,
        
    },

    IconPasswordLogin:{
        
        position: 'absolute',
        bottom: 29,
        right: 19,
        
    },

        IconPasswordConf:{
        
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

    ContainerCard: {
    width: 332,
    height: 200,
    flexDirection: 'row',       
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: TERTIARY_COLOR,
    marginBottom: 10,
    borderRadius: 10,
},

contentCard: {
    flex: 1,
    justifyContent: 'space-between',
},

iconContainer: {
    marginTop: 15,
    marginLeft: 30,
    alignSelf: 'flex-start',
},

    titleCard: {
        fontSize: 18,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
        alignSelf: 'flex-start',
        marginLeft: 15,
    },

    

    imageCard: {
    width: 120,
    height: 150,
    resizeMode: 'contain',
},
    iconCard: {
        flex: 1,
        alignSelf: 'flex-end',
        
    },


});