import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Product } from '../HomeScreen';

import Icon from '@expo/vector-icons/MaterialIcons';
import { stylesGlobal } from '../../../theme/AppTheme';
import { TERTIARY_COLOR } from '../../../common/const';


interface Props {
    isVisible: boolean;  //mostrar modal
    item: Product;
    hiddenModal: () => void; //ocultar el modal
    
}

export const ModalProductComponent = ({ isVisible, item, hiddenModal }: Props) => {
    const { width } = useWindowDimensions();
    

    //función agregar el producto al carrito
    const handleAddProduct = () => {
        
        
        //cerrar modal
        hiddenModal();
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={stylesGlobal.containerModal}>
                <View style={{
                    ...stylesGlobal.bodyModal,
                    width: width * 0.95
                }}>
                    <View style={stylesGlobal.headerModal}>
                        
                        <View style={stylesGlobal.iconCard}>
                            <Icon name='cancel'
                                color={TERTIARY_COLOR}
                                size={23}
                                onPress={hiddenModal} />
                        </View>
                    </View>

                    <Text style={stylesGlobal.titleModal}>{item.name} </Text>

                    <View style={{ alignItems: 'center' }}>
                        <Image source={{
                            uri: item.pathImage
                        }}
                            style={stylesGlobal.imageCard} />
                    </View>  
                            <>            
                    <View > 
                        <Text style={stylesGlobal.textModal}>
                            Genero: <Text style={stylesGlobal.textGender}>{item.gender}</Text>
                        </Text>
                        <Text style={stylesGlobal.textModal}>
                            Desarrollador: <Text style={stylesGlobal.textGender}>{item.developer}</Text>
                        </Text>
                        
                            <Text style={stylesGlobal.textTotalPrice}>
                            Total: ${(item.price).toFixed(2)}
                            </Text>
                    </View>
                                <TouchableOpacity style={stylesGlobal.buttonModal}
                                    onPress={handleAddProduct}>
                                    <Text style={stylesGlobal.buttonModalText}>Agregar Carrito</Text>
                                </TouchableOpacity>
                            </>
                    
                </View>
            </View>
        </Modal>
    )
}
