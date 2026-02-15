import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const IniciarSesionScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>Inicio de Sesión</Text>
            <Text style={[styles.text, styles.subtitulo]}>¡Bienvenido/a de nuevo!</Text>

            <View style={[styles.inputs]}>
                <TextInput style={styles.buttonText} placeholder='Correo Electrónico' placeholderTextColor='#7c7c7c'></TextInput>
            </View>

            <View style={[styles.inputs]}>
                <TextInput style={styles.buttonText} placeholder='Contraseña' placeholderTextColor='#7c7c7c'></TextInput>
            </View>


            <TouchableOpacity style={[styles.inputs]}>
                <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text style={[styles.text, styles.textRegistro]}>Ayudada, no puedo iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={[styles.text, styles.textRegistro]}>¿No tienes cuenta? Registrate aquí</Text>
            </TouchableOpacity>

                        
            <View style={styles.buttonOtrasRedes}>
                <TouchableOpacity>
                    <Image source={{ uri:'https://i.postimg.cc/gkb2XygJ/icono-google.png' }} style={{ width: 40, height: 40 }}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={{ uri:'https://i.postimg.cc/y8v1bMBt/icono-facebook.png' }} style={{ width: 40, height: 40 }}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={{ uri:'https://i.postimg.cc/fbPwwYVm/icono-discord.png' }} style={{ width: 40, height: 30 }}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
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
    
    buttonOtrasRedes: {
        marginTop: 30,
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