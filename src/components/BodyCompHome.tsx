import React, { ReactNode } from 'react'
import { useWindowDimensions, View } from 'react-native'
import { stylesGlobal } from '../theme/AppTheme';

interface Props {
    children: ReactNode; //Componente React
}

export const BodyCompHome = ({ children }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...stylesGlobal.containerHome,
            height: height * 0.90
        }}>
            {children}
        </View>
    )
}