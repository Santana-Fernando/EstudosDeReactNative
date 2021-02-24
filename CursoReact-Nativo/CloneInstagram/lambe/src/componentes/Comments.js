import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Comments extends Component {
    render(){
        let view = null
        if(this.props.comment){
            view = this.props.comment.map((item, index) => {
                return (
                    <View style={styles.commentsContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}: </Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </View>
                )
            })
        }

        return (
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10
    },
    commentsContainer:{
        flexDirection: 'row',
        marginTop: 5
    },
    nickName:{
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comment:{
        color: '#555'
    }
})

export default Comments