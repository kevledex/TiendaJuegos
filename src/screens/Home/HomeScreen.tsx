import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { BodyComponent } from '../../components/BodyComponent';
import { CardProductComponent } from './components/CardProductComponent';
import Icon from '@expo/vector-icons/MaterialIcons';


export interface Product{
    id: number,
    name: string,
    genre: string,
    developer: string, 
    price: number,
    pathImage: string,
}

export const HomeScreen = () => {

    //datos de prueba
    const products: Product[] = [
        {id: 1, name: 'Grand Theft Auto V ', genre:'Acción-Aventura', developer:' Rockstar Games', price: 35, pathImage: 'https://static.wikia.nocookie.net/esgta/images/1/1b/Car%C3%A1tula_GTA_V.jpg/revision/latest?cb=20130402191528'},
        {id: 2, name: 'Forza Horizon 4 ', genre:'Carreras', developer:'Playground Games', price: 30, pathImage: 'https://media.vandal.net/m/59799/forza-horizon-4-2018102103227_1.jpg'},
        {id: 3, name: 'Halo: The Master Chief Collection', genre:'FPS', developer:'343 Industries', price: 40, pathImage: 'https://images.g2a.com/360x600/1x1x1/halo-the-master-chief-collection-pc-steam-clave-global-i10000008375007/5f1aad3146177c782a0f91b3'},
        {id: 4, name: 'Detroit: Become Human', genre:'Aventura gráfica', developer:'Quantic Dream', price: 40, pathImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Detroit_Become_Human.jpg/250px-Detroit_Become_Human.jpg'},
        {id: 5, name: 'Resident Evil 4 (Remake)', genre:'Survival Horror', developer:'Capcom', price: 50, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png'},
        {id: 6, name: 'Minecraft', genre:'Sandbox', developer:'Mojang Studios', price: 20, pathImage: 'https://areajugones.sport.es/wp-content/uploads/2022/01/minecraft-464x588.jpg.webp'},
        {id: 7, name: 'God of War (2018)', genre:'Acción-Aventura', developer:'Santa Monica Studio', price: 50, pathImage: 'https://static.wikia.nocookie.net/godofwar/images/a/a8/Portada_God_of_War_%282018%29.png/revision/latest?cb=20211008000250&path-prefix=es'},
        {id: 8, name: 'Hollow Knight', genre:'Metroidvania', developer:'Team Cherry', price: 20, pathImage: 'https://i.3djuegos.com/juegos/11596/hollow_knight/fotos/ficha/hollow_knight-3915488.jpg'},
      ];

    return (
    <View>
        
        <BodyComponent>
            <FlatList 
                data={products}
                //renderItem={({ item }) => <Text>{item.name}</Text>}
                renderItem={({ item }) => <CardProductComponent item={item} />}
                keyExtractor = {item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />
        </BodyComponent>
    </View>
    )
}
