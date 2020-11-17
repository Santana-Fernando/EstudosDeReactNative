import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'

function Comp (){
    return <Text style={Style.Font}>Componete Oficial</Text>
}


function Comp1 (){
    return <Text style={Style.Font}>Comp 02</Text>
}

function Comp2 (){
    return <Text style={Style.Font}>Comp 03</Text>
}

export {
    Comp, Comp1, Comp2
}
