import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'
import If from './IF'

export default props =>{
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Style.Font}>
                    ========= Mostrando Usuario =========
                </Text>
                <Text style={Style.Font}>
                    {usuario.nome} = {usuario.email}
                </Text>
            </If>
        </>
    )
}