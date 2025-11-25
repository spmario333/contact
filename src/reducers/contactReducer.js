import { types } from "../type/types";

const initialState = {
    contact : [],
    active: null,

}


export const contactReducer = (state = initialState, action) =>{

    switch (action.type) {
        case types.contactGet:
            return {
                ...state,
                contact: [...action.payload],
                active: null
            }
    
        default:
            return state;
    }



}