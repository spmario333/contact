import { fetchContact } from "../helpers/fetch"
import { types } from "../type/types"




export const startLoadingContact = () => {

    return async (dispatch) => {

        try {

            const resp = await fetchContact('contact', {}, 'GET')
            const body = await resp.json()
            const { contacts } = body

            dispatch(contactLoaded(contacts))

        } catch (error) {
            console.log(error)
        }



    }
}

const contactLoaded = (contact) => ({
    type: types.contactGet,
    payload: contact
})


export const startSearch = (val) => {
    return (dispatch, getState) => {


        const value = val.trim().toLowerCase()


        const { contact } = getState().cont
        const cont = contact.filter(c =>
            c.name?.trim().toLowerCase().includes(value) ||
            c.user?.trim().toLowerCase().includes(value) ||
            c.center?.trim().toLowerCase().includes(value) ||
            c.firstNum?.trim().toLowerCase().includes(value) ||
            c.center?.trim().toLowerCase().includes(value) ||
            c.position?.trim().toLowerCase().includes(value))
        dispatch(Search(cont))


    }


}

const Search = (c) => ({

    type: types.contactSearch,
    payload: c
})

export const updateActive = (contact) => ({
    type: types.contactActive,
    payload: contact
})



export const startUpdate = (contacto) => {
    return async (dispatch, getState) => {


        const { id } = contacto


        try {
            await fetchContact(`contact/${id}`, contacto, 'PUT')

            dispatch(updateContact())
            dispatch(startLoadingContact())


        } catch (error) {
            console.log(error)
        }
    }
}

const updateContact = () => ({
    type: types.contactUpdate,

})

export const modalOpen = () => ({
    type: types.contactOpenModal,

})


export const modalClose = () => ({
    type: types.contactCloseModal
})


export const startNewContact = (contact) => {
    return async (dispatch) => {
        try {

            await fetchContact(`contact/new`, contact, 'POST')
            dispatch(startLoadingContact())
            dispatch(newContact())


        } catch (error) {
            console.log(error)
        }




    }


}


const newContact = () => ({
    type: types.contactAdd,

})



export const startDeleteContact = (id) => {

    return async (dispatch) => {




        try {
            await fetchContact(`contact/${id}`, {}, 'DELETE')

            dispatch(deleteContact())
            dispatch(startLoadingContact())


        } catch (error) {
            console.log(error)
        }
    }
}

const deleteContact = () => ({
    type: types.contactDelete
})