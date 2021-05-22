import React, { useContext, useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import UsersContext from '../context/UserContext'

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    return(
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput 
                style={styles.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome."
                value={user.name}
            />
            <Text>E-Mail</Text>
            <TextInput 
                style={styles.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o E-Mail."
                value={user.email}
            />
            <Text>Avatar URL</Text>
            <TextInput 
                style={styles.input}
                onChangeText={urlAvatar => setUser({...user, urlAvatar})}
                placeholder="Informe a url do seu avatar."
                value={user.urlAvatar}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 20
    }
})