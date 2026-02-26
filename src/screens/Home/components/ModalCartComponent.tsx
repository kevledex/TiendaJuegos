import React from 'react'
import { Modal, View } from 'react-native'
import { cart } from '../HomeScreen';

interface Props {
    isVisible: boolean; //mostrar modal
    cart: cart[]; //arreglo con los productos del carrito
    hiddenModal: () => void;
}

export const ModalCartComponent = ({ isVisible, cart }: Props) => {
    return (
        <Modal>
            
        </Modal>
    )
}
