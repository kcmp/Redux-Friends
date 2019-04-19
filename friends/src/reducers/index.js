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

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOADING: {
            return { 
                ...state, 
                loading: true
            };
        }
        case ERROR_MESSAGE:{
            return {                 
                ...state, 
                error: action.errorMessage, 
                loading: false 
            };
        }                
        case GET_FRIENDS: {
            return {                 
                ...state, 
                friends: action.friends, 
                loading: false, error: ''
            }
        }        
        default:
            return state
    }
}

export default reducer;