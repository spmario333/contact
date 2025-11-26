import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { authReducer } from "./authReducer";



export const rootReducer = combineReducers({
    cont : contactReducer,
    auth : authReducer
})

