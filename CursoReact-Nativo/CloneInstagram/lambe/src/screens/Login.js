import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Login extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    componentDidUpdate = prevProps => {
        if(prevProps.isLoading && !this.props.isLoading){
            this.props.navigation.navigate('Profile')
        }
    }

    login = () => {
        this.props.onLogin({...this.state})
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput 
                    placeholder='Email' 
                    style={style.input}
                    autoFocus={true}
                    keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput 
                    placeholder='Senha' 
                    style={style.input}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity onPress={this.login} style={style.buttom}>
                    <Text style={style.buttomText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Register')
                }} style={style.buttom}>
                    <Text style={style.buttomText}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    },
    buttom:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText:{
        fontSize: 20,
        color: '#FFF'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

//export default Login

export default connect(mapStateToProps, mapDispatchToProps)(Login)
