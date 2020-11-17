import React from 'react'
import { Text, FlatList } from 'react-native'
import Style from '../estilo'
import produtos from './produtos'
import Produtos from './produtos'

export default props =>{
    const Render = ({ item: p }) =>{
        return <Text> {p.id} {p.nome} {p.preco} </Text>
    }
    return (
        <>
            <Text style={Style.Font}>Lista de Produtos</Text>
            <FlatList 
            data={produtos}
            keyExtractor={i => `${i.id}`}
            renderItem={Render}
            />
        </>
    )
}