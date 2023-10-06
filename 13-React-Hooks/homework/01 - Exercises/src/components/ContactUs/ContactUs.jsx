import React from "react";
import {useDispatch} from "react-redux"
import {enviarForm} from "../../redux/actions/actions"

const ContactUs = () => {
  const dispatch = useDispatch()
  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const handleImput = (event)=>{
    const {name, value} = event.target
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(enviarForm(form))
  }
  React.useEffect(()=> {
    console.log(form);
  }, [form]);

  return (
    <div>
      <form className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input name="nombre" onChange={handleImput}/>
        <label htmlFor="email">Email: </label>
        <input name="email" onChange={handleImput}/>
        <label htmlFor="asunto">Asunto: </label>
        <input name="asunto" onChange={handleImput}/>
        <label htmlFor="mensaje">Mensaje: </label>
        <input name="mensaje" onChange={handleImput}/>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
