import { types } from "../type/types";

const initialState = {
    contact : [],
    scontact: [],
    active: null,
    search: false
}


export const contactReducer = (state = initialState, action) =>{

    switch (action.type) {
        case types.contactGet:
            return {
                ...state,
                contact: [...action.payload],
                scontact:[],
                active: null,
                search: false,
            }

        case types.contactSearch:
            return {
                ...state,
                scontact :[...action.payload] ,
                active: null,
                search: true
            }
    
        default:
            return state;
    }



}