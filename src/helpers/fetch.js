import Swal from "sweetalert2";



const baseURL = process.env.REACT_APP_API_URL



export const fetchContact = (endpoint, data, method = 'GET') => {



    const url = `${baseURL}/${endpoint}`

    try {

        if (method === 'GET') {
            return fetch(url)
        } else {

            return fetch(url, {
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)

            })


        }
    } catch (error) {
        Swal.fire('Error', error, 'error')
    }



}