import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { stylesGlobal } from '../theme/AppTheme'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/BottonComponent';
import { ButtonRSocialComponent } from '../components/ButtonRSocialComponent';
import { BodyComponent } from '../components/BodyComponent';
import { SECONDARY_COLOR } from '../common/const';
import Icon from '@expo/vector-icons/MaterialIcons';

interface FormRegistro {

    correo: string;
    contrasena: string;

}


export const IniciarSesionScreen = () => {
    const navigation = useNavigation();

    const [formRegistro, setFormRegistro] = useState<FormRegistro>({

        correo: '',
        contrasena: '',

    });

    const handleChangeValue = (name: string, value: string) => {
        setFormRegistro({
            ...formRegistro,
            [name]: value
        });
    }

    const handleRegistro = () => {
        console.log('Datos de registro:', formRegistro);
    }

    
    const [showPassword, setShowPassword] = useState(true);



    return (
        <BodyComponent>
            <View style={stylesGlobal.containerBody}>
                <Text style={[stylesGlobal.text, stylesGlobal.title]}>Inicio de Sesión</Text>
                <Text style={[stylesGlobal.text, stylesGlobal.subtitulo]}>¡Bienvenido/a de nuevo!</Text>

                <View style={stylesGlobal.containerInput}>

                    <InputComponent
                        placeholder='Correo Electrónico'
                        placeholderTextColor='#7c7c7c'
                        handleChangeValue={handleChangeValue}
                        name='correo'
                        keyboardType='email-address'
                    />

                    
                    <InputComponent
                        placeholder='Contraseña'
                        placeholderTextColor='#7c7c7c'
                        handleChangeValue={handleChangeValue}
                        name='contrasena'
                        keyboardType='default'
                        secureTextEntry={showPassword}
                    />
                    <Icon name={showPassword ? 'visibility' : 'visibility-off'}
                        color={SECONDARY_COLOR}
                        style={stylesGlobal.IconPasswordLogin}
                        size={20}
                        onPress={() => setShowPassword(!showPassword)}/> 
                    


                </View>

                <ButtonComponent
                    buttonText='INICIAR SESIÓN'
                    onPress={handleRegistro}
                />

                <Text style={stylesGlobal.text}> O Inicia Sesión con:</Text>

                <View style={stylesGlobal.buttonOtrasRedes}>
                    <ButtonRSocialComponent
                        uri='https://i.postimg.cc/gkb2XygJ/icono-google.png' />
                    <ButtonRSocialComponent
                        uri='https://i.postimg.cc/y8v1bMBt/icono-facebook.png' />
                    <ButtonRSocialComponent
                        uri='https://i.postimg.cc/d0BbyyLY/discord-logo.png' />
                </View>

                <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'RegistroScreen' }))}>
                    <Text style={[stylesGlobal.text, stylesGlobal.textRegistro]}>¿No tienes cuenta? Registrate aquí</Text>
                </TouchableOpacity>

            </View>
        </BodyComponent>
    )
}
