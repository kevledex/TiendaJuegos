import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../HomeScreen';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../common/const';
import { stylesGlobal } from '../../../theme/AppTheme';
import { ModalProductComponent } from './ModalProductComponent';

interface Props {
  item: Product;
}

export const CardProductComponent = ({ item }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const hiddenModal = (): void => {
    setShowModal(!showModal);
  }

  return (
    <>
      <View style={stylesGlobal.containerCard}>

        <View style={stylesGlobal.contentCard}>
          <Image
            source={{ uri: item.pathImage }}
            style={stylesGlobal.imageCard}
          />
          <Text style={stylesGlobal.titleCard}>
            {item.name}
          </Text>
          <Text style={stylesGlobal.textGender}>
            {item.gender}
          </Text>
        </View>

        <View style={stylesGlobal.priceContainer}>
          <Text style={stylesGlobal.textPriceCard}>${item.price}</Text>
          <Icon
            name='add-shopping-cart'
            size={22}
            color={TERTIARY_COLOR}
            onPress={hiddenModal}
          />
        </View>
      </View>
    </>
  )
}