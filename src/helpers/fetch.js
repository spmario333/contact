import Swal from "sweetalert2";

const getBaseURL = () =>{
    if(typeof window !== 'undefined'){
        return window.location.origin
    }

    return process.env.REACT_APP_API_URL || 'http://localhost:4005' 
     
}




export const fetchContact = (endpoint, data, method = 'GET') => {


    const baseURL =getBaseURL()
    const url = `${baseURL}/api/${endpoint}`

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