import React from "react";
import style from "../Country/Country.module.css";

export default function Country({ flags, name, continents, population }) {
  return (
    <div className={style.global}>
      <div>
        <img
          className={style.img}
          src={flags}
          alt="Img not found"
          width="200px"
          hight="250px"
        />
      </div>
      <div className={style.info}>
        <div>
          <h3 className={style.pais}>{name}</h3>
        </div>
        <div>
          <h4 className={style.cont}>Continente: {continents}</h4>
        </div>
        <div>
          <h5 className={style.pob}>Población: {population}</h5>
        </div>
      </div>
    </div>
    //poner boton que diga detalle y en Home poner link
  );
}

/* Imagen de la bandera
Nombre
Continente */
