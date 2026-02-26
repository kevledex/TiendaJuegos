import React from 'react'
import { Text } from 'react-native';
import { stylesGlobal } from '../theme/AppTheme';

interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    return (
        <Text style={stylesGlobal.title}>{title}</Text>
    )
}