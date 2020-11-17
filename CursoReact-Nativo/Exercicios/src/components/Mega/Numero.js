import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Style from '../estilo'

export default ({Num}) =>{
    return (
        <View style={style.Container}>
            <Text style={[Style.Font, style.Num]}>
            {Num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container:{
        height: 50,
        width: 50,
        backgroundColor: 'green',
        margin: 5,
        borderRadius: 25
    },
    Num:{
        color: 'white'
    }
})