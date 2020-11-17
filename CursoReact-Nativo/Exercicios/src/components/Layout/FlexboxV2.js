import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './quadrado'

export default props =>{
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='green'/>
            <Quadrado cor='purple'/>
            <Quadrado cor='gray'/>
            <Quadrado cor='red'/>
            <Quadrado cor='pink'/>
       </View>
    )
}

const style = StyleSheet.create({
    FlexV2:{
        flex:1,
        width: "100%",
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        backgroundColor: 'cyan'
    }
})