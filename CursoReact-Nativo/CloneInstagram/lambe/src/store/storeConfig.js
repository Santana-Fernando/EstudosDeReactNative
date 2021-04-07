import { 
    createStore, 
    combineReducers,
    compose,
    applyMiddleware 
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'
import mensageReducer from './reducers/message'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    message: mensageReducer
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig