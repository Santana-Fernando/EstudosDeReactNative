import React, {useState} from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import Style from './estilo'

export default props =>{
    const [nome, setNome] = useState('Amato animos animatos animagos')
    return (
        <View>
            <TextInput
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={(nome => setNome(nome))}
            />
            <Text>
                {nome}
            </Text>
        </View>
    )
}