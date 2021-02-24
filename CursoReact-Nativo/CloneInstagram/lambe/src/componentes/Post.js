import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import Author from './Author'
import Comments from './Comments'
import AddComentario from './AdicionarComment'

class Post extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Author
                    email={this.props.email}
                    nickname={this.props.nickname}
                />
                <Comments comment={this.props.comments} />
                <AddComentario />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})

export default Post