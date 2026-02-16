import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { stylesRegistro } from './Theme/AppInicialTheme'

export const RegistroScreen = () => {
    return (
        <View style={stylesRegistro.container}>
            <Text style={[stylesRegistro.text, stylesRegistro.title]}>Regístrate</Text>
            <Text style={[stylesRegistro.text, stylesRegistro.subtitulo]}>Únete a la comunidad</Text>

            <View style={[stylesRegistro.inputs]}>
                <TextInput style={stylesRegistro.buttonText} placeholder='Nombre de Usuario' placeholderTextColor='#7c7c7c'></TextInput>
            </View>

            <View style={[stylesRegistro.inputs]}>
                <TextInput style={stylesRegistro.buttonText} placeholder='Correo Electrónico' placeholderTextColor='#7c7c7c'></TextInput>
            </View>

            <View style={[stylesRegistro.inputs]}>
                <TextInput style={stylesRegistro.buttonText} placeholder='Contraseña' placeholderTextColor='#7c7c7c'></TextInput>
            </View>

            <View style={[stylesRegistro.inputs]}>
                <TextInput style={stylesRegistro.buttonText} placeholder='Confirmar Contraseña' placeholderTextColor='#7c7c7c'></TextInput>
            </View>

            <TouchableOpacity style={[stylesRegistro.inputs, stylesRegistro.inputCrear]}>
                <Text style={stylesRegistro.buttonText}>CREAR CUENTA</Text>
            </TouchableOpacity>

            <Text style={stylesRegistro.text}>O registrate con:</Text>

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
                <Text style={[stylesRegistro.text, stylesRegistro.textRegistro]}>¿Ya tienes cuenta? Inicia Sesión aquí</Text>
            </TouchableOpacity>


        </View>
    )
}
