import {NETWORK_ERRORS, UNKNOWN_ERROR} from "../constants/ErrorsConstants";

export const handleNetworkErrors = (data)=>dispatch=>{
    console.log('hi')
    dispatch({
        type:NETWORK_ERRORS,
        payload:data
    })
}

export const handleUnknownUserError = (data)=>dispatch=>{
 dispatch({
     type: UNKNOWN_ERROR,
     payload: data
 })
}
