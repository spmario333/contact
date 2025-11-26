



export const ContactCard = (props) => {







  return (

    <div className="con-card"> 
      <p className="con-heading">Nombre : {props.name}</p> 
      <p>Movil : {props.firstNum}</p>
      <p>Fijo : {props.secondNum}</p>
      <p>Cargo : {props.position}</p>
      <p>Centro : {props.center}</p>
      <p>Usuario : {props.user}</p>
    </div>


  )
}
