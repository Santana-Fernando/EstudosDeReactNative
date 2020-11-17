import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './estilo'
import estilo from './estilo'

export default ({inicial, passo}) => {
    //let numero = props.numero
    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)
    

    return (
        <>
            <Button title="+" onPress={inc}/>
            <Text style={estilo.Font}>{numero}</Text>
            <Button title="-" onPress={dec}/>
        </>
    )
}