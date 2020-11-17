import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './quadrado'

export default props =>{
    return (
        <View style={style.FlexV3}>
            <Quadrado lado={20} cor='green'/>
            <Quadrado lado={30} cor='purple'/>
            <Quadrado lado={40} cor='gray'/>
            <Quadrado lado={50} cor='red'/>
            <Quadrado lado={60} cor='pink'/>
       </View>
    )
}

const style = StyleSheet.create({
    FlexV3:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        height: 350,
        width: "100%",
        backgroundColor: 'cyan'
    }
})