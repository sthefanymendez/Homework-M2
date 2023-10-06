import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const InfoEnviada = () => {
   const formulario = useSelector((state)=>state.formulario)
const [información, setInformacion] = 
React.useState({
   nombre: "",
   email: "",
   asunto: "",
   mensaje: "",
});

React.useEffect(()=>{
   setInformacion(formulario);
},[formulario, información]);

   return (
      <div>
         <h1>ESTA ES LA INFORMACIÓN QUE ENVIASTE...</h1>
         <h3>{información.nombre}</h3>
         <h3>{información.email}</h3>
         <h3>{información.asunto}</h3>
         <h3>{información.mensaje}</h3>
      </div>
   );
};

export default InfoEnviada;
