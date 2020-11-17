import React from 'react'
import { Text } from 'react-native'
import Style from '../estilo'
import Produtos from './produtos'

export default props =>{
    function lista(){
        return Produtos.map(p => {
            return <Text key={p.id} style={Style.Font}> {p.id} -- {p.nome} -- R${p.preco} </Text>
        })
    }
    return (
        <>
            <Text style={Style.Font}>Lista de Produtos</Text>
            {lista()}
        </>
    )
}