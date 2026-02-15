import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { RegistroScreen } from './src/screens/RegistroScreen';
import { StyleSheet } from 'react-native';
import { IniciarSesionScreen } from './src/screens/IniciarSesionScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <RegistroScreen/> */}
    <IniciarSesionScreen/>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0F172A',
        flex: 1
    },
})