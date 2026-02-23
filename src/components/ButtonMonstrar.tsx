import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { stylesGlobal } from '../theme/AppTheme'

interface Props {
    buttonText: string;
    onPress: () => void;
    
}

export const ButtonMonstrar = ({ buttonText, onPress }: Props) => {
    return (
        <TouchableOpacity 
        style={[stylesGlobal.inputs, stylesGlobal.buttonMostar]} 
        onPress={onPress} 
        >
            <Text style={stylesGlobal.buttonTextMostrar}>{buttonText}</Text>
        </TouchableOpacity>
    )
}