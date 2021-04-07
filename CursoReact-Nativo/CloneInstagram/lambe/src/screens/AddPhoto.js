import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

const noUser = "Você precisa estar logado para fazer a postagem de uma foto."
class AddPhoto extends Component {
    state = {
        image: {},
        comment: ''
    }

    componentDidUpdate = prevProps => {
        if(prevProps.loading && !this.props.loading){
            this.setState({
                image: {},
                comment: ''
            })
            this.props.navigation.navigate('Feed')
        }
    }

    pickImage = () => {

        if(!this.props.name){
            Alert.alert('Falha! ', noUser)
            return
        }
        ImagePicker.showImagePicker(
            {
                title: 'Escolha a imagem',
                maxHeight: 600,
                maxWidth: 800
            },
            res => {
                if (!res.didCancel) {
                    this.setState({ image: { uri: res.uri, base64: res.data } })
                }
            }
        )
    }

    save = async () => {
        if(!this.props.name){
            Alert.alert('Falha! ', noUser)
            return
        }
        await this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe a sua imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: this.state.image.uri }}
                            style={styles.image}
                        />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.buttonText}>Escolha a Imagem</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Algum comentário pra foto?'
                        style={styles.input}
                        value={this.state.comment}
                        editable={this.props.name != null}
                        onChangeText={comment => this.setState({ comment })}
                    />
                    <TouchableOpacity disabled={this.props.loading} 
                    style={[styles.button, this.props.loading ? styles.buttonDisabled : null]} onPress={this.save}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%'
    },
    buttonDisabled: {
        backgroundColor: '#AAA'
    }
})

const mapStateToProps = ({ user, posts }) => {
    return {
        email: user.email,
        name: user.name,
        loading: posts.isUploading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)