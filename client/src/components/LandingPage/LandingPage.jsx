import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.img}>
      <div className={style.contenedor}>
        <h1 className={style.titulo}>Viajá por el Mundo...</h1>

        <p className={style.info}>
          Bienvenidos a una experiencia única, <br />
          donde vas a poder encontrar todos los países <br />y su información
          correspondiente. <br />
          ¿Querés planear una actividad en un país determinado? <br />
          Aprovechá las opciónes que te brindamos.
        </p>
        <Link to="/home">
          <button className={style.button}> Ingresar al mundo</button>
        </Link>
      </div>
    </div>
  );
}
/* 
[ ] Alguna imagen de fondo representativa al proyecto
[ ] Botón para ingresar al home (Ruta principal)
*/
