import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { stylesGlobal } from '../theme/AppTheme'


export const IniciarSesionScreen = () => {
    return (
        <View style={stylesGlobal.containerBody}>
            <Text style={[stylesGlobal.text, stylesGlobal.title]}>Inicio de Sesión</Text>
            <Text style={[stylesGlobal.text, stylesGlobal.subtitulo]}>¡Bienvenido/a de nuevo!</Text>

            <View style={[stylesGlobal.inputs]}>
                <TextInput style={stylesGlobal.buttonText} placeholder='Correo Electrónico' placeholderTextColor='#7c7c7c'></TextInput>
            </View>

            <View style={[stylesGlobal.inputs]}>
                <TextInput style={stylesGlobal.buttonText} placeholder='Contraseña' placeholderTextColor='#7c7c7c'></TextInput>
            </View>


            <TouchableOpacity style={[stylesGlobal.inputs]}>
                <Text style={stylesGlobal.buttonText}>INICIAR SESIÓN</Text>
            </TouchableOpacity>

            <Text style={stylesGlobal.text}>O Inicia Sesión con:</Text>

            <View style={stylesGlobal.buttonOtrasRedes}>
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
                <Text style={[stylesGlobal.text, stylesGlobal.textRegistro]}>Ayudada, no puedo iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={[stylesGlobal.text, stylesGlobal.textRegistro]}>¿No tienes cuenta? Registrate aquí</Text>
            </TouchableOpacity>


        </View>
    )
}

