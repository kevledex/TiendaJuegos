import React from 'react'
import { Modal, View } from 'react-native'
import { Product } from '../HomeScreen';

interface Props {
    isVisible: boolean; //mostrar modal
    item: Product;
    hiddenModal: () => void;
}

export const ModalProductComponent = ({ isVisible, item, hiddenModal }: Props) => {
    return (
        <Modal>
            
        </Modal>
    )
}
