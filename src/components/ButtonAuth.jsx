import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut, startLogin } from '../action/auth'

export const ButtonAuth = () => {


  const dispatch = useDispatch()  
  const [checked, setChecked] = useState(false)
  const [pass, setPass] = useState('')
  const {ok} = useSelector(state=>state.auth)

  const handleLogin = (e) => {
      setChecked(e.target.checked)
      if (ok) {
        dispatch(LogOut())
      }
    
      
  }

  const handlePass = (e) => {
    setPass(e.target.value)
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(startLogin(pass))
    
   
    
  }


  return (
    <div>
      {


        (checked && !ok)
        && (<form onSubmit={handleSubmit}>
          <label >Admin</label>
          <input
            type="password"
            onChange={handlePass}
          />

        </form>)


      }



      <label
        className="checkbox-wrapper"
        onClick={handleLogin}
      >
        <input type="checkbox"  />
        <div className="checkmark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              d="M20 6L9 17L4 12"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <span className="label">Contactos</span>
      </label>
    </div>
  )
}
