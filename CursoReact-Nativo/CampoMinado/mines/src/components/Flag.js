import React from 'react';
import { StyleSheet, View } from 'react-native';

export default props => {
    return(
        <View style={styles.contairner}>
            <View style={[styles.flagpole, props.Bigger ? styles.flagpoleBigger : null]}></View>
            <View style={[styles.flag, props.Bigger? styles.flagBigger : null]}></View>
            <View style={[styles.base1, props.Bigger? styles.base1Bigger : null ]}></View>
            <View style={[styles.base2, props.Bigger? styles.base2Bigger : null]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    contairner:{
        marginTop: 2
    },
    flagpole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9
    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft: 3
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12
    },
    flagpoleBigger:{
        height: 28,
        width: 4,
        marginLeft: 16
    },
    flagBigger:{
        height: 10,
        width: 14,
        marginLeft: 3
    },
    base1Bigger:{
        height: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12
    },
    base2Bigger:{
        height: 4,
        width: 20,
        marginTop: 24,
        marginLeft: 8
    }
})