import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { modalClose, startUpdate } from '../action/contact'
export const ModalForm = () => {

    const { modal, active } = useSelector(state => state.cont)

    const [form, setForm] = useState({
        name: '',
        firstNum: '',
        secondNum: '',
        position: '',
        center: '',
        user: '',
    })

    
useEffect(() => {
  if (active) {
    setForm(active)
  }

  
}, [active])

  const {name,firstNum,secondNum,position,center,user} = form


    const dispatch = useDispatch()
    const handleClosed = () => {
        dispatch(modalClose())
//Validar todos los campos y solo disparar en caso q cambie el form revisar para esto useRef 
        dispatch(startUpdate(form))

    }


    const handleChange = (e) => {
        setForm({...form,
            [e.target.name]: e.target.value
        })
        
    }

    return (
        <div>
            {
                (active) &&

                <Modal show={modal} onHide={handleClosed} size="sm">
                    <Modal.Body>
                        <form>
                            <div>

                                <label>Nombre</label>
                                <input
                                    type="text"
                                    value={name}
                                    name='name'
                                    onChange={handleChange}
                                />
                                <label>Movil</label>
                                <input
                                    type="text"
                                    value={firstNum}
                                    name='firstNum'
                                    onChange={handleChange}
                                />
                                <label>Fijo</label>
                                <input
                                    type="text"
                                    value={secondNum}
                                    name='secondNum'
                                    onChange={handleChange}
                                />
                                <label>Cargo</label>
                                <input
                                    type="text"
                                    value={position}
                                    name='position'
                                    onChange={handleChange}
                                />
                                <label>Centro</label>
                                <input
                                    type="text"
                                    value={center}
                                    name='center'
                                    onChange={handleChange}
                                />
                                <label>Usuario</label>
                                <input
                                    type="text"
                                    value={user}
                                    name='user'
                                    onChange={handleChange}
                                />
                            </div>
                        </form>
                        <Button variant="secondary" onClick={handleClosed}>
                            Actualizar
                        </Button>
                        <Button variant="secondary" >
                            Cancelar
                        </Button>
                    </Modal.Body>
                </Modal>
            }






            

        </div>
    )
}
