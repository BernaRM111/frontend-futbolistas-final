import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>

        Nombre: {link.nombre} 
        <br></br>
        Edad: {link.edad} 
        <br></br>
        Nacionalidad: {link.nacionalidad} 
        <br></br>
        Estatura: {link.estatura} 
        <br></br>
        Peso: {link.peso} 
        <br></br>
        Club: {link.club} 
        <br></br>
        Posicion: {link.posicion} 
        <br></br>
        Goles: {link.goles} 
        <br></br>
        Asistencias: {link.asistencias} 
        <br></br>
        Imagen:  
        <br></br>
        <br></br>
        <img src={link.imagen} width="150" height="150"/>
        <br></br>
        <br></br>

        *************************************************************************************************************
      </div>
    </div>
  );
};

export default Link;