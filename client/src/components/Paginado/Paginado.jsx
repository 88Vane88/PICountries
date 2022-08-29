import React from "react";

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="paginado">
        {pageNumber &&
          pageNumber.map((number) => (
            <button onClick={() => paginado(number)}>{number}</button>
          ))}
      </ul>
    </nav>
  );
}
