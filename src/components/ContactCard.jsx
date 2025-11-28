import { useDispatch, useSelector } from "react-redux"
import { modalOpen, startUpdate, updateActive } from "../action/contact"
import { ModalForm } from "./ModalForm"
import { Button } from 'react-bootstrap'



export const ContactCard = (props) => {


  const dispatch = useDispatch()

  const { ok } = useSelector(state => state.auth)

  const handleEdit = () => {
    dispatch(updateActive(props))
    dispatch(modalOpen())
  }


  return (

    <div className="con-card">
      <p className="con-heading">Nombre : {props.name}</p>
      <p>Movil : {props.firstNum}</p>
      <p>Fijo : {props.secondNum}</p>
      <p>Cargo : {props.position}</p>
      <p>Centro : {props.center}</p>
      <p>Usuario : {props.user}</p>

      {
        (ok) &&
        (<div>
          <Button
            className="btn btn-primary mr-2 "
            onClick={handleEdit}


          >
            Editar
          </Button>
          <button className="btn btn-danger mr-2 " >
            Eliminar
          </button>
        </div>)

      }


      <ModalForm/>
    </div>

  )
}
