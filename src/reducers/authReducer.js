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
        case types.authLogout:
            return{
                ...state,
                ok: false,
                user: null
            }

        
        default:
            return state;
            
    }
}