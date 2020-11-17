import React from 'react'
import { Text, View } from 'react-native'
import Style from './estilo'

export default ({num = 0}) =>{

    return(
        <View>
            <Text style={Style.Font}>O resultado é:</Text>
            {
                num % 2 === 0
                ? <Text style={Style.Font}>Par</Text> 
                : false
            }
        </View>
    )
    
}