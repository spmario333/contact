import { types } from "../type/types";

const initialState = {
    contact: [],
    scontact: [],
    active: null,
    search: false,
    modal: false
}


export const contactReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.contactGet:
            return {
                ...state,
                contact: [...action.payload],
                scontact: [],
                active: null,
                search: false,
            }
            case types.contactUpdate:
            return {
                ...state,
                active: null,
            }

        case types.contactSearch:
            return {
                ...state,
                scontact: [...action.payload],
                active: null,
                search: true
            }

        case types.contactActive:
            return {
                ...state,
                active: action.payload

            }
        case types.contactOpenModal:
            return{
                ...state,
                modal: true
            }
        case types.contactCloseModal:
            return{
                ...state,
                modal: false
            }

        default:
            return state;
    }



}