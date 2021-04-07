import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logout} from '../store/actions/user'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class Profile extends Component {
    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Auth')
    }

    render() {
        const options = {
            email: this.props.email, secure: true
        }

        return (
            <View style={style.container}>
                <Gravatar options={options} style={style.avatar} />
                <Text style={style.nickname}>{this.props.name}</Text>
                <Text style={style.email}>{this.props.email}</Text>
                <TouchableOpacity onPress={this.logout} style={style.buttom}>
                    <Text style={style.buttomText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 25
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

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)