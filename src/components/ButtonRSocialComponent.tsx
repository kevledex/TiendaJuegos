import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { stylesGlobal } from '../theme/AppTheme';

interface Props {
    uri: string;
}

export const ButtonRSocialComponent = ({ uri }: Props) => {
    return (
        <TouchableOpacity>
            <Image
                source={{ uri: uri }}
                style={stylesGlobal.image}
            />
        </TouchableOpacity>
    );
}