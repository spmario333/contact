import { useDispatch, useSelector } from "react-redux"
import { modalOpen, startDeleteContact, updateActive } from "../action/contact"
import { ModalForm } from "./ModalForm"
import { Button } from 'react-bootstrap'



export const ContactCard = (props) => {


  const dispatch = useDispatch()

  const { ok } = useSelector(state => state.auth)

  const handleEdit = () => {
    dispatch(updateActive(props))
    dispatch(modalOpen())
    
  }
  const handleDeleted = () => {
    dispatch(startDeleteContact(props.id))
    
  }

  return (

    <div className="con-card">
      <p className="con-heading">Nombre : {(props.name)?(props.name):''}</p>
      <p>Móvil : {(props.firstNum)?(props.firstNum):''}</p>
      <p>Fijo : {(props.secondNum)?(props.secondNum):''}</p>
      <p>Cargo : {(props.position)?(props.position):''}</p>
      <p>Centro : {(props.center)?(props.center):''}</p>
      <p>Usuario : {
  (props.user) ? (
    <a 
      href={`mailto:${props.user}@etecsa.cu`}
      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
      title="Enviar correo a este usuario"
    >
      {props.user}
    </a>
  ) : ''
}</p>

      {
        (ok) &&
        (<div className="card-contact-buttons">
          <Button
            className="btn btn-primary mr-2 "
            onClick={handleEdit}


          >
            Editar
          </Button>
          <button className="btn btn-danger mr-2 " onClick={handleDeleted}>
            Eliminar
          </button>
        </div>)

      }


      <ModalForm />
    </div>

  )
}
