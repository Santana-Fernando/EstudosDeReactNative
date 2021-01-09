import {
    Alert,
    Platform
} from 'react-native'

const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000'

function showError(err){
    if(err.response && err.response.data){
        Alert.alert('Ops! Ocorreu um erro ', `${err.response.data}`)
    } else {
        Alert.alert('Ops! Ocorreu um erro ', `${err}`)
    }
}

function showSuccess(Msg){
    Alert.alert('Sucesso!', Msg)
}

export { server, showError, showSuccess }