import React from "react";
import { Link } from "react-router-dom";
/* import style from "./LandingPage.module.css"; */
import { useEffect } from "react";
// import {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions/index";
import Country from "../Country/Country";
/* import Paginado from "../Paginado/Paginado"; */

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries); //me trae todo del estado de los paises

  useEffect(() => {
    dispatch(getCountries());
    if (getCountries().length === 0) {
      return getCountries();
    }
  });
  console.log(getCountries);
  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }
  return (
    <div>
      <Link to="/form">Crear Actividad</Link>
      <h1>Conocé los países</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        volver a cargar todos los países
      </button>
      <div>
        <select>
          <option value="ascAlf">Ascendente</option>
          <option value="descAlf">Descendente</option>
        </select>
        <select>
          <option value="ascPob">Ascendente</option>
          <option value="descPob">Descendente</option>
        </select>
        <select>
          <option value="Continent">Continente</option>
          <option value="Actividad">Actividad turística</option>
        </select>
        <select>
          <option value="All">Todos</option>
          <option value="created">Creados</option>
          <option value="Api">Existentes</option>
        </select>
        {allCountries?.map((c) => {
          //existe countries? si? mapealos
          return (
            <Link to={"/details/" + c.id} key={c.id}>
              <Country
                flags={c.flags}
                name={c.name}
                continents={c.continents}
                key={c.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* 
[ ] Input de búsqueda para encontrar países por nombre
[ ] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /countries y deberá mostrar su: imagen de la bandera, Nombre, Continente
[ ] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina. */
