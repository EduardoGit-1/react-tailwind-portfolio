import axios from '../../helpers/axiosInstance'
import {POST_MESSAGE} from '../../constants/endpoints'
const postMessage = ({name, email, message}, setModal) => (dispatch) =>{
    dispatch({
        type: "POST_MESSAGE_LOADING",
        payload: true
    })
    axios.post(POST_MESSAGE, {name, email, message}).then((response) =>{
        let data = response.data
        dispatch({
            type: "POST_MESSAGE_SUCCESS_OR_INFO",
            payload: data
        })
        setModal(true)
    }).catch(err =>{
        dispatch({
            type: "POST_MESSAGE_ERROR",
            payload: err
        })
        setModal(true)
    }).then(() =>{
        dispatch({
            type: "POST_MESSAGE_LOADING",
            payload: false
        })
    })


}

export default postMessage