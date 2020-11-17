import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './quadrado'

export default props =>{
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
       </View>
    )
}

const style = StyleSheet.create({
    FlexV4:{
        flexGrow: 1,
        width: 100,
        backgroundColor: 'purple'
    },
    V0:{
        backgroundColor: 'gray',
        height: 0,
    },
    V1:{
        backgroundColor: 'red',
        flexGrow: 3,
    },
    V2:{
        backgroundColor: 'blue',
        flexGrow: 1
    }
})