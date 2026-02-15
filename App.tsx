import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { RegistroScreen } from './src/screens/RegistroScreen';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RegistroScreen/>
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