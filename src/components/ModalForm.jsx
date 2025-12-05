import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { modalClose, startNewContact, startUpdate } from '../action/contact'
import Swal from 'sweetalert2'



export const ModalForm = () => {



    const namefocus = useRef(null)
    const { modal, active } = useSelector(state => state.cont)

    const { ok } = useSelector(state => state.auth)

    const initialFormState = {
        name: '',
        firstNum: '',
        secondNum: '',
        position: '',
        center: '',
        user: '',
    }


    const [form, setForm] = useState(initialFormState)


    useEffect(() => {
        if (active) {
            setForm(active)
        } else {
            setForm({
        name: '',
        firstNum: '',
        secondNum: '',
        position: '',
        center: '',
        user: '',
    })
        }
      
    }, [active])

    const { name, firstNum, secondNum, position, center, user } = form


    const dispatch = useDispatch()
    const handleClosed = () => {

        if (!name.trim() || !firstNum.trim()) {
            Swal.fire('Error', 'Nombre y móvil son campos obligatorios', 'error');
            return;
        }
        const phoneRegex = /^[0-9+-\s]+$/;
        if (!phoneRegex.test(firstNum) || (secondNum && !phoneRegex.test(secondNum))) {
            Swal.fire('Error', 'Los números telefónicos deben contener solo dígitos, +, - o espacios', 'error');
            return;
        }
        if (active) {
            dispatch(startUpdate(form));
        } else {
            dispatch(startNewContact(form));
        }
        dispatch(modalClose());
    
}


const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })

}

const handelCancel = () =>{
    dispatch(modalClose()) 

}


return (
    <div>



        <Modal show={modal} onHide={handelCancel} size="sm" backdropClassName='backdrop-modal-form'>
            <Modal.Body>
                <form className="modal-form">
                    <div>
                        <div className="form-group">

                            <label>Nombre</label>
                            <input
                                type="text"
                                value={name}
                                name='name'
                                onChange={handleChange}
                                className="form-control"
                                autoComplete='off'
                                ref={namefocus}
                            />
                        </div>
                        <div className="form-group">

                            <label>Móvil</label>
                            <input
                                type="text"
                                value={firstNum}
                                name='firstNum'
                                onChange={handleChange}
                                className="form-control"
                                autoComplete='off'
                            />
                        </div>
                        <div className="form-group">

                            <label>Fijo</label>
                            <input
                                type="text"
                                value={secondNum}
                                name='secondNum'
                                onChange={handleChange}
                                className="form-control"
                                autoComplete='off'
                            />
                        </div>
                        <div className="form-group">

                            <label>Cargo</label>
                            <input
                                type="text"
                                value={position}
                                name='position'
                                onChange={handleChange}
                                className="form-control"
                                autoComplete='off'
                            />
                        </div>
                        <div className="form-group">

                            <label>Centro</label>
                            <input
                                type="text"
                                value={center}
                                name='center'
                                onChange={handleChange}
                                className="form-control"
                                autoComplete='off'
                            />
                        </div>
                        <div className="form-group">

                            <label>Usuario</label>
                            <input
                                type="text"
                                value={user}
                                name='user'
                                onChange={handleChange}
                                className="form-control"
                                autoComplete='off'
                            />
                        </div>

                    </div>
                </form>
                <div className="modal-buttons">

                    <Button variant="secondary" onClick={handleClosed}>
                        {(active) ? 'Actualizar' : 'Añadir'}
                    </Button>
                    <Button variant="secondary" onClick={handelCancel} >
                        Cancelar
                    </Button>
                </div>
            </Modal.Body>
        </Modal>









    </div>
)
}
