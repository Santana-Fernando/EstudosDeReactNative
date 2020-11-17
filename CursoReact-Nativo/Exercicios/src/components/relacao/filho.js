import React from 'react'
import { Text } from 'react-native'
import Style from '../estilo'

export default props =>{
    return (
        <Text style={Style.Font}>
            {props.nome} {props.sobrenome}
       </Text>
    )
}