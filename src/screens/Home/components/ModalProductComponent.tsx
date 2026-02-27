import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Product } from '../HomeScreen';
import Icon from '@expo/vector-icons/MaterialIcons';
import { stylesGlobal } from '../../../theme/AppTheme';
import { TERTIARY_COLOR, SECONDARY_COLOR } from '../../../common/const';

interface Props {
    isVisible: boolean;
    item: Product;
    hiddenModal: () => void;
    addProduct: (id: number) => void;
}

export const ModalProductComponent = ({ isVisible, item, hiddenModal, addProduct }: Props) => {
    const { width } = useWindowDimensions();

    //hook useState: permite gestionar el estado del contador
    const [quantity, setQuantity] = useState<number>(1);

    const handleAddProduct = () => {
        addProduct(item.id);
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
                        <Text style={stylesGlobal.titleModal} numberOfLines={1}>{item.name}</Text>
                        <Icon name='cancel'
                            color={TERTIARY_COLOR} size={28}
                            onPress={hiddenModal} />
                    </View>
                    <View style={stylesGlobal.containerImageModal}>
                        <Image source={{ uri: item.pathImage }}
                            style={stylesGlobal.imageModal} />
                    </View>
                    <View style={stylesGlobal.infoContainerModal}>
                        <Text style={stylesGlobal.textModal}>
                            Género: <Text style={stylesGlobal.textGender}>{item.gender}</Text>
                        </Text>
                        <Text style={stylesGlobal.textModal}>
                            Desarrollador: <Text style={stylesGlobal.textGender}>{item.developer}</Text>
                        </Text>
                    </View>
                    <View style={stylesGlobal.footerModal}>
                        <Text style={stylesGlobal.textTotalPrice}>
                            ${(item.price).toFixed(2)}
                        </Text>
                        <TouchableOpacity style={stylesGlobal.buttonModal} onPress={handleAddProduct}>
                            <Icon name="add-shopping-cart" size={20} color={SECONDARY_COLOR} style={{ marginRight: 8 }} />
                            <Text style={stylesGlobal.buttonModalText}>Agregar al Carrito</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}