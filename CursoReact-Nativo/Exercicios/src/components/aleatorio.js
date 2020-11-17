import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default ({min, max}) =>{ 
    let numeroAleatorio = Math.floor(Math.random() * ((max + 1) - min) + min)
    return (
        <Text style={Estilo.Font}>
            O valor mínimo é {min} e o valor máximo é {max} e o número sorteado entre eles é {numeroAleatorio}
        </Text>
    )
}