import React from 'react'
import { ImageSourcePropType, Text, TouchableOpacity, View, Image } from 'react-native'
import { stylesGlobal } from '../theme/AppTheme';

interface Props {
    
    iconEye?: ImageSourcePropType; 
    onPress: () => void;
    
}

export const ButtonMonstrar = ({ iconEye, onPress }: Props) => {
    return (
        <TouchableOpacity 
        style={[stylesGlobal.inputs, stylesGlobal.buttonMostar]} 
        onPress={onPress} 
        >
    <View> 
            <Image
            source={iconEye}
            style={[stylesGlobal.buttonIcon]}/>
    </View>
            
        </TouchableOpacity>
    )
}