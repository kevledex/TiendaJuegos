import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { stylesGlobal } from '../theme/AppTheme'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/BottonComponent';
import { ButtonRSocialComponent } from '../components/ButtonRSocialComponent';
import { BodyComponent } from '../components/BodyComponent';
import { SECONDARY_COLOR } from '../common/const';
import Icon from '@expo/vector-icons/MaterialIcons';
import { User } from '../navigator/StackNavigator';

// Interfaz define la estructura del objeto del formulario
interface FormLogin {
    email: string;
    password: string
}

//Interfaz que defie las propiedades de un componente

interface Props {
    users: User[];
}

export const IniciarSesionScreen = ({ users }: Props) => {
    const navigation = useNavigation();

    const [formLogin, setFormLogin] = useState<FormLogin>({

        email: '',
        password: '',

    });

    //funcion para verificar el usuario
    const verifyUser = (): User => {
        const existUser = users.filter(user => user.email == formLogin.email && user.password == formLogin.password)[0];
        return existUser
    }

    const handleChangeValue = (name: string, value: string) => {
        setFormLogin({
            ...formLogin,
            [name]: value
        });
    }

    const handleLogin = () => {
        if (formLogin.email == '' || formLogin.password == '') {
            Alert.alert("Error", "Por favor complete todos los campos")
            return;
        }

        //verificar si existe el usuario
        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario y/o Contraseña Incorrectos');
            return;
        }

        //Navegacion a Home
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }))
    }

    const [showPassword, setShowPassword] = useState<boolean>(true);

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
                        name='email'
                        keyboardType='email-address'
                    />

                    <InputComponent
                        placeholder='Contraseña'
                        placeholderTextColor='#7c7c7c'
                        handleChangeValue={handleChangeValue}
                        name='password'
                        keyboardType='default'
                        secureTextEntry={showPassword}
                    />
                    <Icon name={showPassword ? 'visibility' : 'visibility-off'}
                        color={SECONDARY_COLOR}
                        style={stylesGlobal.IconPasswordLogin}
                        size={20}
                        onPress={() => setShowPassword(!showPassword)} />
                </View>

                <ButtonComponent
                    buttonText='INICIAR SESIÓN'
                    onPress={handleLogin}
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

                <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'RegisterScreen' }))}>
                    <Text style={[stylesGlobal.text, stylesGlobal.textRegistro]}>¿No tienes cuenta? Registrate aquí</Text>
                </TouchableOpacity>

            </View>
        </BodyComponent>
    )
}
