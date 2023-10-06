import React, { useEffect } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  const errors = {};
  if(!inputs.name.length) {
    errors.name = "Se requiere un nombre";
  }
  if(!regexEmail.test(inputs.email)){
    errors.email = "Debe ser un correo electrónico"
  }
  if(!inputs.message.length) {
    errors.message = "Se requiere un mensaje";
  }
  return errors;
}

export default function Contact () {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setInputs({
      ...inputs, 
      [name]:value,
    });
    setErrors(validate({
      ...inputs,
      [name]:value,
    }))
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(Object.keys(errors).length){
      window.alert("Debe llenar todos los campos");
    } else{
      window.alert("Datos completos");
      setInputs({
        name: "",
        email: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        message: "",
      });
    }

  }
  return (
    <form 
      action='' 
      style={{display:"grid", justifyContent:"center"}} 
      onSubmit={handleSubmit}
    ><label htmlFor=''>Nombre:</label>
      <input
        className={errors.name && 'warning'}
        type="text" 
        name='name' 
        value={inputs.name}
        placeholder='Escribe tu nombre...' 
        onChange={handleChange}
      />
      {errors.name ? <p className='danger'>{errors.name}</p> : null}
      <label htmlFor=''>Correo Electrónico:</label>
      <input 
        className={errors.email && 'warning'}
        type="text" 
        name='email' 
        value={inputs.email}
        placeholder='Escribe tu email...' 
        onChange={handleChange}
      />
      {errors.email ? <p className='danger'>{errors.email}</p> : null}
      <label htmlFor=''>Mensaje:</label>
      <textarea
        className={errors.message && 'warning'}
        type='text'
        name='message' 
        value={inputs.message}
        placeholder='Escribe tu mensaje...'
        onChange={handleChange}
      />
      {errors.message ? <p className='danger'>{errors.message}</p> : null}
      <button type="submit">Enviar</button>
    </form>
  )
}
