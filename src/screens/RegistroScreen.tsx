import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../theme/AppTheme';
import { BodyComponent } from '../components/BodyComponent';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/BottonComponent';
import { ButtonRSocialComponent } from '../components/ButtonRSocialComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ButtonMonstrar } from '../components/ButtonMonstrar';

interface FormRegistro {
    nombreUsuario: string;
    correo: string;
    contrasena: string;
    confirmarContrasena: string;
}

export const RegistroScreen = () => {
    const navigation = useNavigation();

    const [formRegistro, setFormRegistro] = useState<FormRegistro>({
        nombreUsuario: '',
        correo: '',
        contrasena: '',
        confirmarContrasena: ''
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

    const [showPasswordConf, setShowPasswordConf] = useState(true); 

    /* const ChangeShowText1 = () => {
        return showPassword ? 'Mostrar Contraseña' : 'Ocultar Contraseña';
        
    } */

    /* const ChangeShowText2 = () => {
        return showPasswordConf ? 'Mostrar Contraseña' : 'Ocultar Contraseña';
        
    } */

    const showEye = {uri:'https://i.postimg.cc/QCSNJJhJ/mostrar.png'};
    const hideEye = {uri:'https://i.postimg.cc/ZnjYxx4P/esconder.png'};

    const ChangeIconEye1 = () => {
        return showPassword ? showEye : hideEye;
        
    }

    const ChangeIconEye2 = () => {
        return showPasswordConf ? showEye : hideEye;
        
    }

    return (
        <BodyComponent>
            <View style={stylesGlobal.containerBody}>
                <Text style={[stylesGlobal.text, stylesGlobal.title]}>Regístrate</Text>
                <Text style={[stylesGlobal.text, stylesGlobal.subtitulo]}>Únete a la comunidad</Text>

                <View style={stylesGlobal.containerInput}>
                    <InputComponent
                        placeholder='Nombre de Usuario'
                        placeholderTextColor='#7c7c7c'
                        handleChangeValue={handleChangeValue}
                        name='nombreUsuario'
                        keyboardType='default'
                    />
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ButtonMonstrar
                    iconEye={ChangeIconEye1()}
                    onPress={() => setShowPassword(!showPassword)}/>

                    <Text style={[stylesGlobal.text, {marginLeft: 8}]}>
                    Mostrar Contraseña
                    </Text>
                </View>

                    <InputComponent
                        placeholder='Confirmar Contraseña'
                        placeholderTextColor='#7c7c7c'
                        handleChangeValue={handleChangeValue}
                        name='confirmarContrasena'
                        keyboardType='default'
                        secureTextEntry={true}
                    />

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ButtonMonstrar
                    iconEye={ChangeIconEye2()}
                    onPress={() => setShowPasswordConf(!showPasswordConf)}/>

                    <Text style={[stylesGlobal.text, {marginLeft: 8}]}>
                    Ocultar Contraseña
                    </Text>
                </View>

            </View>

                <ButtonComponent
                    buttonText='CREAR CUENTA'
                    onPress={handleRegistro}
                />

                <Text style={stylesGlobal.text}> O regístrate con:</Text>

                <View style={stylesGlobal.buttonOtrasRedes}>
                    <ButtonRSocialComponent
                        uri='https://i.postimg.cc/gkb2XygJ/icono-google.png' />
                    <ButtonRSocialComponent
                        uri='https://i.postimg.cc/y8v1bMBt/icono-facebook.png' />
                    <ButtonRSocialComponent
                        uri='https://i.postimg.cc/d0BbyyLY/discord-logo.png' />
                </View>

                <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'LoginScreen' }))}>
                    <Text style={[stylesGlobal.text, stylesGlobal.textRegistro]}>¿Ya tienes cuenta? Inicia Sesión aquí</Text>
                </TouchableOpacity>

            </View>
        </BodyComponent>
    )
}