import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Style from '../estilo'

export default props =>{
    return (
        <View style={style.Display}>
            <Text style={[Style.Font, style.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display:{
        backgroundColor: "black",
        padding: 50
    },
    DisplayText:{
        color: 'cyan'
    }
})