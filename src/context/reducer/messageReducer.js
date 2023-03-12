const messageReducer = (state, {type, payload}) =>{
    switch(type){
        case 'POST_MESSAGE_SUCCESS_OR_INFO':
            return {
                ...state,
                ...payload
            }
        case 'POST_MESSAGE_ERROR':
            return {
                ...state,
                error : payload
            }
        case 'POST_MESSAGE_LOADING':
            return {
                ...state,
                loading : payload
            }
        case 'POST_MESSAGE_CLEAR':
            return {
                ...payload
            }
        default:
            return state
    }
}
export default messageReducer;