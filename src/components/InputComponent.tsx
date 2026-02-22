import React from 'react'
import { KeyboardTypeOptions, TextInput, View } from 'react-native'
import { stylesGlobal } from '../theme/AppTheme';

interface Props {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    placeholderTextColor: string;
    handleChangeValue: (name: string, value: string) => void;
    name: string;
    secureTextEntry?: boolean;
}
export const InputComponent = ({placeholder, keyboardType, placeholderTextColor, handleChangeValue, name, secureTextEntry = false}: Props) => {
    return (
        <View style={stylesGlobal.inputs}>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                placeholderTextColor={placeholderTextColor}
                style={stylesGlobal.buttonText} 
                onChangeText={(value) => handleChangeValue(name, value)}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}
