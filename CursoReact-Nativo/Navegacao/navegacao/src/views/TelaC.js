import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import TextoCentral from '../components/TextoCentral'

export default props => {
    const numero = props.route && props.route.params && props.route.params.numero ? props.route.params.numero : 0
    return(
        <TextoCentral  corDoTexto="yellow" corDeFundo="green">
            Tela C - {numero}
        </TextoCentral>
    )
}