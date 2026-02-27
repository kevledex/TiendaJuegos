import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View, Image } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../common/const';
import { stylesGlobal } from '../../../theme/AppTheme';
import { cart } from '../HomeScreen';

interface cartGame {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
    pathImage: string;
    gender: string;
}

interface Props {
    isVisible: boolean;
    cart: cartGame[];
    hiddenModal: () => void;
    removeProduct: (id: number) => void; 
}

export const ModalCartComponent = ({ isVisible, cart, removeProduct,  hiddenModal}: Props) => {
    const { width } = useWindowDimensions();
    

    //función para calcular el total a pagar
    const totalPay = (): number => {
        let total: number = 0;
        cart.forEach(product => {
            total += product.total;
        })
        return total;
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={stylesGlobal.containerModal}>
            <View style={{
            ...stylesGlobal.bodyModal,
             width: width * 0.90
            }}>
        <View style={stylesGlobal.headerModal}>
            <Text style={stylesGlobal.titleModal}>Mi Carrito</Text>
            <View style={stylesGlobal.iconCard}>
            <Icon name='cancel'
                color={TERTIARY_COLOR}
                size={23}
                onPress={hiddenModal} />
            </View>
        </View>

        <View style={stylesGlobal.headerTable}>
            <Text style={stylesGlobal.headerTextTable}>Producto</Text>
            <View style={stylesGlobal.headerDescription}>
            <Text style={stylesGlobal.headerTextTable}>Precio</Text>
            <Text style={stylesGlobal.headerTextTable}>Total</Text>
            </View>
        </View>

        <FlatList
            data={cart}

            renderItem={({ item }) =>
            <View style={stylesGlobal.containerCard }>
                <View style={stylesGlobal.contentCard}>
                    <Image source={{ uri: item.pathImage }} style={stylesGlobal.imageCard} />
                <View style={{ flex: 1 }}>
                    <Text style={stylesGlobal.titleCard}>{item.name}</Text>
                    <Text style={stylesGlobal.textGender}>{item.gender}</Text>
                </View>
            </View>

            <View style={stylesGlobal.priceContainer}>
                <Text style={stylesGlobal.textPriceCard}>${item.price.toFixed(2)}</Text>
                <Text style={{ marginLeft: 8 }}>${item.total.toFixed(2)}</Text>

                <TouchableOpacity onPress={() => removeProduct(item.id)} style={{ marginLeft: 8 }}>
                    <Icon name="delete" size={22} color={TERTIARY_COLOR} />
                </TouchableOpacity>
                </View>
            </View>
            }

            keyExtractor={item => item.id.toString()}
            style={{ maxHeight: 320 }}
        />

        <View style={stylesGlobal.containerTotalPay}>
            <Text style={stylesGlobal.textTotalPay}>
            Total pagar: ${totalPay().toFixed(2)}
            </Text>
        </View>

            <TouchableOpacity style={stylesGlobal.button} onPress={() => {hiddenModal()}}>
                <Text style={stylesGlobal.buttonText}>Comprar</Text>
            </TouchableOpacity>
            </View>
            </View>
        </Modal>
    )
    }