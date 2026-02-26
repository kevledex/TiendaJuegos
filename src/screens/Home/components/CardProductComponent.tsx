import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../HomeScreen';
import Icon from '@expo/vector-icons/MaterialIcons';
import { SECONDARY_COLOR } from '../../../common/const';
import { stylesGlobal } from '../../../theme/AppTheme';


interface Props {
    item: Product;

}


export const CardProductComponent = ({item}: Props) => {
    //hook usestate: gestionar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    //funcion para mostara o ocultar el modal
    const hiddenModal = (): void => {
        setShowModal(!showModal);
    }

    return (
        //framme
        <> 
        <View >
            <Image source={{uri: item.pathImage}}/>
            <View>
                <Text>{item.name}</Text>
                <Text >${item.price.toFixed(2)}</Text>
            </View>
            <View style={{margin: 15}}>
                <Icon name='add-shopping-cart' 
                size={33} 
                color={SECONDARY_COLOR}
                onPress={hiddenModal}
                />  
            </View>          
            </View>
        
        </> 
    )
}