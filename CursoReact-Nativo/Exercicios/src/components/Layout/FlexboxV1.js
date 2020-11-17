import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './quadrado'

export default props =>{
    return (
        <View style={style.FlexV1}>
            <Quadrado cor='green'/>
            <Quadrado cor='purple'/>
            <Quadrado cor='gray'/>
            <Quadrado cor='red'/>
            <Quadrado cor='pink'/>
       </View>
    )
}

const style = StyleSheet.create({
    FlexV1:{
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: 'cyan'
    }
})