import {NETWORK_ERRORS, UNKNOWN_ERROR} from "../constants/ErrorsConstants";

const initialState = {
    netWorkErrorMessage:"",
    unknownErrors:""
}

export default function (state=initialState,action) {
    switch (action.type) {
        case NETWORK_ERRORS:
            console.log('Hello')
            return {
                ...state,
                netWorkErrorMessage: action.payload
            }

        case UNKNOWN_ERROR:
            return {
                ...state,
                unknownErrors: action.payload
            }

        default:
            return  state

    }
}
