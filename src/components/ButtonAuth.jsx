import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut, startLogin } from '../action/auth'
import { Modal } from 'react-bootstrap'

export const ButtonAuth = () => {


  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)
  const [pass, setPass] = useState('')
  const { ok } = useSelector(state => state.auth)
  const inputRef = useRef(null)

  useEffect(() => {
    if (checked && !ok && inputRef.current) {
      inputRef.current.focus()
    }
  }, [checked, ok])


  const handleLogin = (e) => {

    const isChecked = e.target.checked
    setChecked(isChecked)
    if (ok && !isChecked) {
      dispatch(LogOut())
    }
  }


  const handlePass = (e) => {
    setPass(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pass.trim()) {
      dispatch(startLogin(pass))
      setPass('')
    }



  }

  const handleClose = () => {
    setChecked(false)
    setPass('')
  }


  return (
    <div>
      {


        (checked && !ok)
        && (
          <Modal
            show={checked && !ok}
            onHide={handleClose}
            backdrop={true}
            keyboard={true}
          >
            <Modal.Body className='login-modal-body'>
              <div className='login-header'>
                <h5>Acceso Admin</h5>
              </div>
              <form onSubmit={handleSubmit} className='login-form'>
                <div className='form-group'>

                  <label >Contraseña Admin</label>
                  <input
                    ref={inputRef}
                    type="password"
                    onChange={handlePass}
                    value={pass}
                    placeholder='Contraseña'
                    className='form-control login-input'
                    autoComplete='current-password'
                  />
                </div>
                <div className="login-buttons">
                  <button
                    type="submit"
                    className="btn btn-primary login-btn"
                    disabled={!pass.trim()}
                  >
                    Ingresar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary login-btn"
                    onClick={handleClose}
                  >
                    Cancelar
                  </button>
                </div>

              </form>
            </Modal.Body>

          </Modal>
        )


      }



      <label
        className="checkbox-wrapper"
       
      >
        <input type="checkbox"
          checked={ok || checked}
          onChange={handleLogin}
        />
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
