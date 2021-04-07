import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT,
    USER_LOADED,
    LOADING_USER
} from './actionTypes'
import axios from 'axios'
import { connect } from 'react-redux'
import { setMessage } from './message'
const authBaseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyB0Rq2umO2H0m8FrDtlAGw_6c4aa-gcBo8'

export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const createUser = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseUrl}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Ocorreu um erro inesperado, por favor, entre em contato com o suporte.'
            }))
        })
        .then(res => {
            if(res.data.localId) {
                axios.put(`/users/${res.data.localId}.json`, {
                    name: user.name
                })
                .catch(err => {
                    dispatch(setMessage({
                        title: 'Erro',
                        text: 'Ocorreu um erro inesperado, por favor, entre em contato com o suporte.'
                    }))
                })
                .then( () => {
                    dispatch(login(user))
                })
            }
        })
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseUrl}/verifyPassword?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Ocorreu um erro inesperado, por favor, entre em contato com o suporte.'
            }))
        })
        .then(res => {
            if(res.data.localId){
                user.token = res.data.idToken
                axios.get(`/users/${res.data.localId}.json`)
                .catch(err => {
                    dispatch(setMessage({
                        title: 'Erro',
                        text: 'Ocorreu um erro inesperado, por favor, entre em contato com o suporte.'
                    }))
                })
                .then(res => {
                    delete user.password
                    user.name = res.data.name
                    dispatch(userLogged(user))
                    dispatch(userLoaded())
                })
            }
        })
    }
}