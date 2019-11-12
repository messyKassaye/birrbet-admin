import {combineReducers} from "redux";
import ErrorsReducer from "./reducers/ErrorsReducer";

export default combineReducers({
    errorState:ErrorsReducer
})
