import { 
    CREATING_POST, 
    POST_CREATED, 
    SET_POSTS, 
    ADD_COMMENT 
} from './actionTypes'
import { setMessage } from './message'
import axios from 'axios'

export const addPost = post => {
    return (dispatch, getState) => {
        dispatch(creatingPost())
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-lambe-81d22.cloudfunctions.net',
            method: 'post',
            data: {
                image: post.image.base64,
            }
        })
        .catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Ocorreu um erro inesperado, por favor, entre em contato com o suporte.'
            }))
        })
        .then(res => {
            post.image = res.data.imageUrl
            axios.post(`/posts.json?auth=${getState().user.token}`, { ...post })
                .catch(err => {
                    dispatch(setMessage({
                        title: 'Erro',
                        text: err
                    }))
                })
                .then(res => {
                    dispatch(fetchPosts())
                    dispatch(postCreated())
                })
        })
    }
}

export const addComment = payload => {
    return (dispatch, getState) => {
        axios.get(`/posts/${payload.postId}.json`)
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Ocorreu um erro inesperado, por favor, entre em contato com o suporte.'
                }))
            })
            .then(res => {
                const comments = res.data.comments || []
                comments.push(payload.comment)
                axios.patch(`/posts/${payload.postId}.json?auth=${getState().user.token}`, { comments })
                .catch(err => {
                    dispatch(setMessage({
                        title: 'Erro',
                        text: 'Ocorreu um erro inesperado, por favor, entre em contato com o suporte.'
                    }))
                })
                .then(res => {
                    dispatch(fetchPosts())
                })
            })
    }

} 

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
        .catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: 'Ocorreu um erro inesperado, por favor, entre em contato com o suporte.'
            }))
        })
        .then(res => {
            console.log('Mostrando res.data')
            console.log(res.data)
            const rawPosts = res.data
            const posts = []

            for(let key in rawPosts){
                posts.push({
                    ...rawPosts[key],
                    id: key
                })
            }

            dispatch(setPosts(posts.reverse()))
        })
    }
}

export const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    }
}