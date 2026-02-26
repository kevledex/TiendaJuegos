import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../theme/AppTheme';
import { BodyComponent } from '../components/BodyComponent';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/BottonComponent';
import { ButtonRSocialComponent } from '../components/ButtonRSocialComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { SECONDARY_COLOR } from '../common/const';
import { User } from '../navigator/StackNavigator';

interface FormRegister {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

//Interfaz que define las propiedades del componente
interface Props {
    listUsers: User[];
    handleAddUser: (user: User) => void; //actualizar el arreglo
}

export const RegistroScreen = ({ listUsers, handleAddUser }: Props) => {
    const navigation = useNavigation();

    const [formRegister, setFormRegister] = useState<FormRegister>({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const handleChangeValue = (name: string, value: string) => {
        setFormRegister({
            ...formRegister,
            [name]: value
        });
    }

    //funcion para verificar si existe el usuario
    const verifyUser = (): User => {
        const existUser = listUsers.filter(user => user.email == formRegister.email)[0];
        return existUser
    }

    //funcion para generar los ids de los nuevos usuarios
    const getTdUser = () => {
        const getId = listUsers.length + 1;
        return getId;
    }

    const handleRegister = () => {
        //Validar los campos
        if (formRegister.username == '' || formRegister.email == '' || formRegister.password == '' || formRegister.passwordConfirm == '') {
            Alert.alert("Error", "Por favor complete todos los campos")
            return;
        }

        if (formRegister.password !== formRegister.passwordConfirm) {
            Alert.alert("Error", "Las contraseñas no coinciden")
            return;
        }

        //Validar campo de inicio de sesion
        if (verifyUser()) {
            Alert.alert("Error", "El usuario ya se encuentra registrado")
            return;
        }
        //Registrar usuarios
        //Crear objeto user
        const newUser: User = {
            id: getTdUser(),
            username: formRegister.username,
            email: formRegister.email,
            password: formRegister.password,
            passwordConfirm: formRegister.passwordConfirm
        }

        //agregar objeto al arreglo
        handleAddUser(newUser);
        Alert.alert("Registrado", "Usuario registrado con éxito")
        //redireccionar al login
        navigation.goBack();

        console.log('Datos de registro:', formRegister);
    }


    const [showPassword, setShowPassword] = useState<boolean>(true);

    const [showPasswordConf, setShowPasswordConf] = useState<boolean>(true);


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
                        name='username'
                        keyboardType='default'
                    />

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
                        style={stylesGlobal.IconPasswordRegister}
                        size={20}
                        onPress={() => setShowPassword(!showPassword)} />

                    <InputComponent
                        placeholder='Confirmar Contraseña'
                        placeholderTextColor='#7c7c7c'
                        handleChangeValue={handleChangeValue}
                        name='passwordConfirm'
                        keyboardType='default'
                        secureTextEntry={showPasswordConf}
                    />
                    <Icon name={showPasswordConf ? 'visibility' : 'visibility-off'}
                        color={SECONDARY_COLOR}
                        style={stylesGlobal.IconPasswordConf}
                        size={20}
                        onPress={() => setShowPasswordConf(!showPasswordConf)} />



                </View>

                <ButtonComponent
                    buttonText='CREAR CUENTA'
                    onPress={handleRegister}
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