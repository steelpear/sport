export const EmailTemplate = ({...props}) => {

  return (
    <div>
      <h3>Имя: {props.name}</h3>
      <h3>Телефон: {props.phone}</h3>
      <h3>E-mail: {props.email}</h3>
    </div>
  )
}
 