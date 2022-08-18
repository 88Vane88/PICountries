import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.fondo}>
      <div className={style.contenedor}>
        <h1 className={style.intro}>Welcome</h1>
        <Link to="/home">
          <button> Ingresar</button>
        </Link>
      </div>
    </div>
  );
}
/* 
[ ] Alguna imagen de fondo representativa al proyecto
[ ] Botón para ingresar al home (Ruta principal)
*/
