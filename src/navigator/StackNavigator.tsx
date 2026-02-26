import { useState } from 'react';
import { PRIMARY_COLOR } from '../common/const'
import { IniciarSesionScreen } from '../screens/IniciarSesionScreen';
import { RegistroScreen } from '../screens/RegistroScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home/HomeScreen';

const Stack = createStackNavigator();

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    passwordConfirm: string
}

export const StackNavigator = () => {

    //datos de prueba
    const users: User[] = [
        { id: 1, username: 'Kevin Cadena', email: 'kevgeek5@gmail.com', password: '12345', passwordConfirm: '12345' },
        { id: 2, username: 'Kevin Ledesma', email: 'kevlex@gmail.com', password: '54321', passwordConfirm: '54321' },
        { id: 3, username: 'kevl', email: 'prueba', password: '12', passwordConfirm: '12' }
    ]

    //hook useState: permite gestionar la lista de usuarios
    const [listUsers, setListUsers] = useState<User[]>(users);  //arreglo con la lista de usuario

    //función para agregar el usuaio al arreglo listUsers
    const handleAddUser = (user: User): void => {
        //modificar el estado del arreglo
        setListUsers([...listUsers, user]);
    }

    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: PRIMARY_COLOR
            },

            headerShown: false

        }}>

            <Stack.Screen name="LoginScreen"
                options={{ headerShown: false }}
                children={() => <IniciarSesionScreen users={listUsers} />}
            />
            <Stack.Screen name="RegisterScreen"
                options={{ headerShown: false }}
                children={() => <RegistroScreen listUsers={listUsers} handleAddUser={handleAddUser} />}
            />
            <Stack.Screen name="Home"
                options={{ headerShown: false }}
                component={HomeScreen}
            />

        </Stack.Navigator>
    );
}