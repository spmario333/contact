import { types } from "../type/types"


export const startLogin = (pass) => {
    return (dispatch) => {

        const password = '123'
        
        if (pass === password) {
            dispatch(Login())
        }
    }
}






const Login = () => ({
    type: types.authLogin
})


export const LogOut = () =>({
    type : types.authLogout,

})