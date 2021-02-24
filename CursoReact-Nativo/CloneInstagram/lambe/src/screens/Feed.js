import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Header from '../componentes/Header'
import Post from '../componentes/Post'

class Feed extends Component {
    state = {
        posts: [
            {
                id: Math.random(),
                nickname: 'Rafael Pereira Filho',
                email: 'rafael@gmail.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [
                    {
                        nickname: 'Paula mwlo',
                        comment: 'Legal'
                    },
                    {
                        nickname: 'Jacinto Pires',
                        comment: 'Foda'
                    }
                ]
            },
            {
                id: Math.random(),
                nickname: 'Oscar Ney',
                email: 'oscar@gmail.com',
                image: require('../../assets/imgs/bw.jpg'),
                comments: []
            }
        ]
    }

    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <FlatList 
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item}/>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
})

export default Feed