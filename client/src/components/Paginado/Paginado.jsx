import React from "react";
import style from "../Paginado/Paginado.module.css";

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumber &&
          pageNumber.map((number) => (
            <button className={style.button} onClick={() => paginado(number)}>
              {number}
            </button>
          ))}
      </ul>
    </nav>
  );
}
