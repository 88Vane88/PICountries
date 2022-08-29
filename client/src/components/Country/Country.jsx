import React from "react";

export default function Country({ flags, name, continents, population }) {
  return (
    <div>
      <div>
        <img src={flags} alt="Img not found" width="200px" hight="250px" />
      </div>
      <div>
        <h3>País: {name}</h3>
      </div>
      <div>
        <h4>Continente: {continents}</h4>
      </div>
      <div>
        <h5>Población: {population}</h5>
      </div>
    </div>
    //poner boton que diga detalle y en Home poner link
  );
}

/* Imagen de la bandera
Nombre
Continente */
