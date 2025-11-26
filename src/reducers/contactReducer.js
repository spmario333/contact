import { types } from "../type/types";

const initialState = {
    contact : [],
    active: null,
    search: false
}


export const contactReducer = (state = initialState, action) =>{

    switch (action.type) {
        case types.contactGet:
            return {
                ...state,
                contact: [...action.payload],
                active: null
            }

        case types.contactSearch:
            return {
                ...state,
                contact: [...action.payload],
                active: null,
                search: true
            }
    
        default:
            return state;
    }



}