



export const ContactCard = (props) => {







  return (

    <div className="card"> {/* Aquí va la clase card */}
      <p className="heading">Nombre : {props.name}</p> {/* Solo el nombre como heading */}
      <p>Centro : {props.center}</p>
      <p>Movil : {props.firstNum}</p>
      <p>Fijo : {props.secondNum}</p>
      <p>Cargo : {props.position}</p>
      <p>Usuario : {props.user}</p>
    </div>


  )
}
