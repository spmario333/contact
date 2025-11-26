import { types } from "../type/types";


const initialState = {
    ok: false,
    user: null

}


export const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ok: true,
                user: 'Admin'
            }
    
        default:
            return state;
            
    }
}