import React from 'react';
import { Alert, FlatList, Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../common/const';
import { stylesGlobal } from '../../../theme/AppTheme';
import { ButtonComponent } from '../../../components/BottonComponent';

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
    clearCart: () => void;
}

export const ModalCartComponent = ({ isVisible, cart, removeProduct, hiddenModal, clearCart }: Props) => {
    const { width } = useWindowDimensions();

    const totalPay = (): number => {
        let total: number = 0;
        cart.forEach(product => {
            total += product.total;
        })
        return total;
    }

    //funcion para comprar productos
    const handleBuy = (): void => {
        Alert.alert('Compra Exitosa', 'Tus juegos se han añadido a tu biblioteca');
        clearCart();
        hiddenModal();
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
                        <Icon name='cancel' color={TERTIARY_COLOR} size={28} onPress={hiddenModal} />
                    </View>

                    {cart.length === 0 ? (
                        <Text style={{
                            ...stylesGlobal.textModal,
                            textAlign: 'center',
                            marginVertical: 30
                        }}>Tu carrito está vacío.</Text>
                    ) : (
                        <FlatList
                            data={cart}
                            keyExtractor={item => item.id.toString()}
                            style={{ maxHeight: 350 }}
                            renderItem={({ item }) => (
                                <View style={stylesGlobal.carItems}>
                                    <Image
                                        source={{ uri: item.pathImage }}
                                        style={{
                                            width: 80,
                                            height: 40,
                                            borderRadius: 5,
                                            marginRight: 10,
                                            resizeMode: 'cover'
                                        }} />
                                    <View style={stylesGlobal.cartItemInfo}>
                                        <Text style={stylesGlobal.cartItemName} numberOfLines={1}>{item.name}</Text>
                                        <Text style={stylesGlobal.cartItemPrice}>${item.price.toFixed(2)}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => removeProduct(item.id)}
                                        style={stylesGlobal.deleteButton}>
                                        <Icon name="delete" size={24} color="#ff4d4d" />
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    )}

                    <View style={stylesGlobal.containerTotalPay}>
                        <Text style={stylesGlobal.textTotalPayLabel}>Total a pagar:</Text>
                        <Text style={stylesGlobal.textTotalPayValue}>${totalPay().toFixed(2)}</Text>
                    </View>

                    {cart.length > 0 && (
                        <View style={{ alignItems: 'center', width: '100%' }}>
                            <ButtonComponent buttonText='FINALIZAR COMPRA'
                                onPress={handleBuy} />
                        </View>
                    )}

                </View>
            </View>
        </Modal>
    )
}