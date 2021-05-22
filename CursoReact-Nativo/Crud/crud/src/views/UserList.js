import React, { useContext } from 'react'
import { View , FlatList, Alert} from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/UserContext'

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmarExclusaoDeUsuario(user) {
        let nomeDoUsuarioParaApagar = user.name
        Alert.alert('Excluir usuário', 'Deseja excluir o usuário ' + nomeDoUsuarioParaApagar + ' ?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            }
        ]) 
    }

    function getUserItem({item: user}){
        return (
            <ListItem
                key={user.id}
                onPress={() => props.navigation.navigate('UserForm')}
                bottomDivider
            >
                <Avatar title={user.name} source={{uri: user.urlAvatar}}/>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" /> }
                />
                <Button
                    onPress={() => confirmarExclusaoDeUsuario(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" /> }
                />
            </ListItem>
        )

    }

    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}