import { types } from "../type/types"
import Swal from 'sweetalert2'



const password=process.env.REACT_APP_ADMIN_PASSWORD


export const startLogin = (pass) => {
    return (dispatch) => {

        
        if (pass === password) {
            dispatch(Login())
        }else{
            Swal.fire('Error', 'Contraseña incorrecta','error')
        }
    }
}






const Login = () => ({
    type: types.authLogin
})


export const LogOut = () =>({
    type : types.authLogout,

})