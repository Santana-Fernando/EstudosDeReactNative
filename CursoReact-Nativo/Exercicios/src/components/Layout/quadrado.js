import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default props =>{
    const lado = props.lado || 50
    return (
        <View
            style={{
                width: lado,
                backgroundColor: props.cor || 'black'
            }}
        />
    )
}