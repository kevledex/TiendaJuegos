import { PRIMARY_COLOR } from '../common/const'
import { IniciarSesionScreen } from '../screens/IniciarSesionScreen';
import { RegistroScreen } from '../screens/RegistroScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: PRIMARY_COLOR
            },
        }}>
            <Stack.Screen name="RegistroScreen" options={{ headerShown: false }} component={RegistroScreen} />
            <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={IniciarSesionScreen} />
        </Stack.Navigator>
    )
}