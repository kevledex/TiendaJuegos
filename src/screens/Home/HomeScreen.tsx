import React, { useState } from 'react'
import { Alert, FlatList, Text, View } from 'react-native'
import { CardProductComponent } from './components/CardProductComponent';
import Icon from '@expo/vector-icons/MaterialIcons';
import { BodyCompHome } from '../../components/BodyCompHome';
import { stylesGlobal } from '../../theme/AppTheme';
import { SECONDARY_COLOR } from '../../common/const';
import { TitleComponent } from '../../components/TitleComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ModalCartComponent } from './components/ModalCartComponent';


export interface Product {
    id: number,
    name: string,
    gender: string,
    developer: string,
    price: number,
    pathImage: string,
}

export interface cart {
    id: number;
    name: string;
    price: number;
    pathImage: string,
    gender: string,
    quantity: number;
    total: number;
}

export const HomeScreen = () => {

    const products: Product[] = [
        { id: 1, name: 'Grand Theft Auto V Enhanced', gender: 'Mundo abierto, Acción, Multijugador', developer: 'Rockstar Games', price: 29.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg?t=1765479644' },
        { id: 2, name: 'Resident Evil Requiem', gender: 'Horror de Supervivencia, Acción, Zombis', developer: 'Compañía CAPCOM, Ltd.', price: 52.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/ce5437442768e38eb575f205ab9397d0264017b0/header.jpg?t=1772106190' },
        { id: 3, name: 'ARC Raiders', gender: 'Tirador de extracción, PVP, Multijugador', developer: 'Embark Studiosch', price: 39.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1808500/e337830aa9314003f23d6630f00304bd815bf673/header_alt_assets_3.jpg?t=1772007651' },
        { id: 4, name: 'Cyberpunk 2077', gender: 'Rol, Mundo abierto, Ciberpunk', developer: 'CD PROJEKT RED', price: 44.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg' },
        { id: 5, name: 'Elden Ring', gender: 'Mundo abierto, RPG de acción, Fantasía oscura', developer: 'FromSoftware', price: 59.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg' },
        { id: 6, name: 'Forza Horizon 5', gender: 'Carreras, Mundo abierto, Multijugador', developer: 'Playground Games', price: 59.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg' },
        { id: 7, name: 'Red Dead Redemption 2', gender: 'Mundo abierto, Historia, Aventura', developer: 'Rockstar Games', price: 59.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg' },
        { id: 8, name: 'EA SPORTS FC™ 25', gender: 'Deportes, Multijugador, Fútbol', developer: 'Electronic Arts', price: 69.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/ec3fb7747fd8080ef53d7686e0d98c5abe1f51f1/header.jpg?t=1769021004' },
        { id: 9, name: 'Minecraft', gender: 'Supervivencia, Sandbox, Construcción', developer: 'Mojang Studios', price: 29.99, pathImage: 'https://i.postimg.cc/fyC8F0cS/minecraft.png' },
        { id: 10, name: 'Forza Horizon 6', gender: 'Carreras, Mundo abierto, Multijugador', developer: 'Playground Games', price: 69.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2483190/27abb1584a118d50d0e3950fd48d557c51981db7/header.jpg?t=1771950222' },
        { id: 11, name: 'Rust', gender: 'Supervivencia, Multijugador, Sandbox', developer: 'Facepunch Studios', price: 39.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg' },
        { id: 12, name: 'American Truck Simulator', gender: 'Simulación, Conducción, Mundo abierto', developer: 'SCS Software', price: 19.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/270880/header.jpg' },
        { id: 13, name: 'Hollow Knight: Silksong', gender: 'Metroidvania, Plataformas, Indie', developer: 'Team Cherry', price: 29.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/header.jpg' },
        { id: 14, name: 'Schedule I', gender: 'Acción, Indie, Estrategia', developer: 'Indie Developer', price: 14.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3164500/header.jpg?t=1769828261' },
        { id: 15, name: 'Borderlands 4', gender: 'Looter Shooter, Acción, Multijugador', developer: 'Gearbox Software', price: 69.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1285190/86b8ff3b7216de9f98bf72d3e476e07a91438f3c/header_alt_assets_1.jpg?t=1772125543' },
        { id: 16, name: 'Call of Duty®: Black Ops 7', gender: 'Acción, FPS, Multijugador', developer: 'Treyarch', price: 69.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3606480/d7041a15f572f7702d5f4bc97e498cd3e1cc62e2/header.jpg?t=1770660428' },
        { id: 17, name: 'Dispatch', gender: 'Simulación, Estrategia, Indie', developer: 'Indie Developer', price: 19.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2592160/header.jpg?t=1770854821' },
        { id: 18, name: 'Dying Light: The Beast', gender: 'Zombis, Mundo abierto, Parkour', developer: 'Techland', price: 59.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3008130/cc54d8961d51eab78fd3fb8507a866a621c2a025/header.jpg?t=1765984527' },
        { id: 19, name: 'Anno 117: Pax Romana', gender: 'Construcción de ciudades, Estrategia, Simulación', developer: 'Ubisoft', price: 59.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3274580/88dbcce1c7630e2d4334fa25e835968e57e0ebfe/header.jpg?t=1771959639' },
        { id: 20, name: 'Assassin’s Creed Shadows', gender: 'Rol, Mundo abierto, Sigilo', developer: 'Ubisoft', price: 69.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3159330/header.jpg?t=1770145731' },
        { id: 21, name: 'R.E.P.O.', gender: 'Terror, Cooperativo, Supervivencia', developer: 'Indie Developer', price: 14.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3241660/1ea445e044a2d5b09cfa8291350b63ebed6e5741/header.jpg?t=1765552338' },
        { id: 22, name: 'The Last of Us™ Part II Remastered', gender: 'Historia, Acción, Aventura', developer: 'Naughty Dog', price: 49.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2531310/header.jpg?t=1750959180' },
        { id: 23, name: 'SILENT HILL f', gender: 'Terror psicológico, Horror de Supervivencia, Misterio', developer: 'Konami', price: 59.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2947440/7e5d923ac622bd1775ebc9b5d4b5b0a24bf5ed40/header.jpg?t=1770169624' },
        { id: 24, name: 'Mafia: The Old Country', gender: 'Crimen, Mundo abierto, Historia', developer: 'Hangar 13', price: 59.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1941540/d06980bb8f41737ca68da8eed40079347db09c84/header.jpg?t=1764177372' },
        { id: 25, name: 'Spider-Man 2', gender: 'Acción, Aventura, Mundo abierto', developer: 'Insomniac Games', price: 59.99, pathImage: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2651280/header.jpg?t=1763569811' },
        { id: 26, name: 'Black Myth: Wukong', gender: 'Acción, RPG, Mitología', developer: 'Game Science', price: 59.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg' },
        { id: 27, name: 'Sons Of The Forest', gender: 'Supervivencia, Terror, Mundo abierto', developer: 'Endnight Games', price: 29.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg' },
        { id: 28, name: 'Detroit: Become Human', gender: 'Decisiones, Historia, Ciencia ficción', developer: 'Quantic Dream', price: 39.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222140/header.jpg' },
        { id: 29, name: 'Metro Exodus', gender: 'Posapocalíptico, FPS, Historia', developer: '4A Games', price: 29.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412020/header.jpg' },
        { id: 30, name: 'Assassin\'s Creed® Odyssey', gender: 'Rol, Mundo abierto, Historia', developer: 'Ubisoft', price: 59.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg' },
        { id: 31, name: 'Resident Evil 4', gender: 'Horror de Supervivencia, Acción, Zombis', developer: 'CAPCOM', price: 39.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg' },
        { id: 32, name: 'Dead Space', gender: 'Horror de Supervivencia, Ciencia ficción, Acción', developer: 'Motive', price: 59.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1693980/header.jpg' },
        { id: 33, name: 'Left 4 Dead 2', gender: 'Zombis, Cooperativo, FPS', developer: 'Valve', price: 9.99, pathImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/header.jpg' }
    ];
    //hook useStae: Permite gestionar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    //funcion para mostrar u ocultar el modal
    const hiddenModal = (): void => {
        setShowModal(!showModal);
    }

    //hook useState: permite gestionar la informacion de los productos
    const [productState, setProductState] = useState<Product[]>(products);

    //hook useState: permite gestionar el estado de los productos del carrito
    const [cart, setCart] = useState<cart[]>([]); //arreglo del carrito

    //funcion para añadir productos al carrito
    const addProduct = (id: number): void => {
        const product = productState.find(product => product.id == id);

        //si no existe el producto
        if (!product) {
            return;
        }

        const existinCart = cart.find(item => item.id == id);
        
        if (existinCart) {
            Alert.alert('Aviso', 'Ya tienes este juego en tu carrito.');
            return;
        }

        //crear el objeto del producto
        const newCart: cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            pathImage: product.pathImage,
            gender: product.gender,
            quantity: 1,
            total: product.price,
            
        }

        //Añadir al arreglo del carrito
        setCart([...cart, newCart]);
        console.log;
    }

    const removeProduct = (id: number): void => {
        setCart(product => product.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    }

    return (
        <SafeAreaView style={stylesGlobal.containerHome}>
            <View style={stylesGlobal.headerHome}>
                <TitleComponent title='JUEGOS RECOMENDADOS' />
                <View style={stylesGlobal.iconHome}>
                    <Text style={stylesGlobal.textIconCart}>{cart.length}</Text>
                    <Icon name='shopping-cart'
                        color={SECONDARY_COLOR}
                        size={30}
                        onPress={hiddenModal} />
                </View>
            </View>
            <BodyCompHome>
                <FlatList
                    data={productState}
                    renderItem={({ item }) => <CardProductComponent
                        item={item} 
                        addProduct={addProduct} />}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </BodyCompHome>
            <ModalCartComponent
                    isVisible={showModal}
                    cart={cart}
                    hiddenModal={hiddenModal}
                    removeProduct={removeProduct}
                    clearCart={clearCart}/>
        </SafeAreaView>
    )
}
