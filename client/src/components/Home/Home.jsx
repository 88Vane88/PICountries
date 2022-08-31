import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Home.module.css";
import { useEffect, useState } from "react";
//import {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  orderByName,
  orderByPoblacion,
  filtradoByContinent,
} from "../../actions/index";
import { postActivities } from "../../actions/index";
import Country from "../Country/Country";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries); //me trae todo del estado de los paises

  const initial_page = 1;

  const [currentPage, setCurrentPage] = useState(initial_page);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage; //10
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //0
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  /*     if (getCountries().length === 0) {
    } */
  //sin el if. dispatch (gertCountries())},[dispatch])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  const [ordAlf, setOrdAlf] = useState("");
  function handleSortAlf(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrdAlf(`Ordenando ${e.target.value}`); //para poder setear, hacer estado local.
  }

  const [ordPob, setOrdPob] = useState("");
  function handleSortPob(e) {
    e.preventDefault();
    dispatch(orderByPoblacion(e.target.value));
    setCurrentPage(1);
    setOrdPob(`Ordenando ${e.target.value}`);
  }

  function handleFiltrado(e) {
    e.preventDefault();
    dispatch(filtradoByContinent(e.target.value));
    //action se dispara cuando pasa algo. Tengo que despachar esa accion
  }

  return (
    <div className={style.img}>
      <div className={style.linkactvity}>
        <NavLink to="/form">Crear Actividad</NavLink>
      </div>
      <div>
        <h1>Conocé los países</h1>
      </div>
      {
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          volver a cargar todos los países
        </button>
      }
      <div className={style.search}>
        <SearchBar />
      </div>
      <div className={style.ordenamimentos}>
        <h4>Ordenar de forma alfabetica</h4>
        <select onChange={(e) => handleSortAlf(e)}>
          <option value="selec">-Seleccionar-</option>
          <option value="ascAlf">A-Z</option>
          <option value="descAlf">Z-A</option>
        </select>
        <h4>Ordenar por población</h4>
        <select onChange={(e) => handleSortPob(e)}>
          <option value="selec">-Seleccionar-</option>
          <option value="ascPob">Mayor</option>
          <option value="descPob">Menor</option>
        </select>
        <h4>Continentes</h4>
        <select onChange={(e) => handleFiltrado(e)}>
          <option value="Selec">-Seleccionar-</option>
          <option value="Todos">Todos</option>
          <option value="North America">América del norte</option>
          <option value="South America">América del sur</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antática</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceanía</option>
        </select>
        <h4>Actividad turística</h4>
        <select>
          <option value="Actividad">Actividad turística</option>
        </select>
        <div className={style.paginado}>
          <Paginado
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginado={paginado}
          />
        </div>
        <div className={style.cards}>
          {currentCountries?.map((c) => {
            //existe countries? si? mapealos
            return (
              <NavLink to={"/detail/" + c.id} key={c.id}>
                <Country
                  flags={c.flags}
                  name={c.name}
                  continents={c.continents}
                  population={c.population}
                  key={c.id}
                />
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* 
[ ] Input de búsqueda para encontrar países por nombre
[ ] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /countries y deberá mostrar su: imagen de la bandera, Nombre, Continente
[ ] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina. */
