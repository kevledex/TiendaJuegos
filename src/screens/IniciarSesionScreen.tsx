import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { stylesRegistro } from './Theme/AppInicialTheme'

export const IniciarSesionScreen = () => {
    return (
        <View style={stylesRegistro.container}>
            <Text style={[stylesRegistro.text, stylesRegistro.title]}>Inicio de Sesión</Text>
            <Text style={[stylesRegistro.text, stylesRegistro.subtitulo]}>¡Bienvenido/a de nuevo!</Text>

            <View style={[stylesRegistro.inputs]}>
                <TextInput style={stylesRegistro.buttonText} placeholder='Correo Electrónico' placeholderTextColor='#7c7c7c'></TextInput>
            </View>

            <View style={[stylesRegistro.inputs]}>
                <TextInput style={stylesRegistro.buttonText} placeholder='Contraseña' placeholderTextColor='#7c7c7c'></TextInput>
            </View>


            <TouchableOpacity style={[stylesRegistro.inputs,  stylesRegistro.inputCrear]}>
                <Text style={stylesRegistro.buttonText}>INICIAR SESIÓN</Text>
            </TouchableOpacity>

            <Text style={stylesRegistro.text}>O Inicia Sesión con:</Text>

            <View style={stylesRegistro.buttonOtrasRedes}>
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
                <Text style={[stylesRegistro.text, stylesRegistro.textRegistro]}>Ayudada, no puedo iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={[stylesRegistro.text, stylesRegistro.textRegistro]}>¿No tienes cuenta? Registrate aquí</Text>
            </TouchableOpacity>


        </View>
    )
}

