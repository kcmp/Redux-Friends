import { 
    LOADING, 
    ERROR_MESSAGE, 
    GET_FRIENDS 
} from '../actions';

const initialState = {
    friends: [],
    loading: false,
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return Object.assign(
                {}, 
                state, 
                {loading: true}
                )
        case ERROR_MESSAGE:
            return Object.assign(
                {}, 
                state, 
                {error: action.errorMessage, loading: false }
                )
        case GET_FRIENDS:
            return Object.assign(
                {}, 
                state, 
                {friends: action.friends, loading: false, error: '' }
                )
        default:
            return state
    }
}