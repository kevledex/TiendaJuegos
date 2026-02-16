import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const RegistroScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>Regístrate</Text>
            <Text style={[styles.text, styles.subtitulo]}>Únete a la comunidad</Text>

            <View style={[styles.inputs]}>
                <TextInput style={styles.buttonText} placeholder='Nombre de Usuario' placeholderTextColor='#7c7c7c'></TextInput>
            </View>

            <View style={[styles.inputs]}>
                <TextInput style={styles.buttonText} placeholder='Correo Electrónico' placeholderTextColor='#7c7c7c'></TextInput>
            </View>

            <View style={[styles.inputs]}>
                <TextInput style={styles.buttonText} placeholder='Contraseña' placeholderTextColor='#7c7c7c'></TextInput>
            </View>

            <View style={[styles.inputs]}>
                <TextInput style={styles.buttonText} placeholder='Confirmar Contraseña' placeholderTextColor='#7c7c7c'></TextInput>
            </View>

            <TouchableOpacity style={[styles.inputs, styles.inputCrear]}>
                <Text style={styles.buttonText}>CREAR CUENTA</Text>
            </TouchableOpacity>

            <Text style={styles.text}>O registrate con:</Text>

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

            <TouchableOpacity>
                <Text style={[styles.text, styles.textIniciarSesion]}>¿Ya tienes cuenta? Inicia Sesión aquí</Text>
            </TouchableOpacity>


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
    textIniciarSesion: {
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