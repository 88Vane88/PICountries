import React from "react";

export default function Country({ flags, name, continents }) {
  return (
    <div>
      <img src={flags} alt="Img not found" width="200px" hight="250px" />
      <h3>{name}</h3>
      <h5>{continents}</h5>
    </div>
  );
}

/* Imagen de la bandera
Nombre
Continente */
