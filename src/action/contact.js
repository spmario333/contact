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