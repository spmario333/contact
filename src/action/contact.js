import { fetchContact } from "../helpers/fetch"
import { types } from "../type/types"




export const startLoadingContact = () =>{

    return async(dispatch)=>{

        try {
            
            const resp = await fetchContact('contact',{},'GET')
            const body = await resp.json()
            const {contacts} = body
            
            dispatch(contactLoaded(contacts))

        } catch (error) {
            console.log(error)
        }



    }
}

const contactLoaded = (contact) =>({
    type: types.contactGet,
    payload : contact
})


export const startSearch = (val) =>{
    return (dispatch, getState)=>{
        const value = val.trim().toLowerCase()
        const {contact} = getState().cont
        const cont = contact.filter(c=>
        c.name.trim().toLowerCase().includes(value) ||
        c.user.trim().toLowerCase().includes(value) ||
        c.center.trim().toLowerCase().includes(value) ||
        c.firstNum.trim().toLowerCase().includes(value) ||
        c.center.trim().toLowerCase().includes(value) ||
        c.position.trim().toLowerCase().includes(value) )
        dispatch(Search(cont))
    }


}

const Search = (c) =>({
    
    type : types.contactSearch,
    payload: c
})
