/* import { GET_COUNTRIES } from "../actions"; */

const initialState = {
  countries: [],
  detail: [],
  //se puede guardar filtro.
};

function rootReducer(state = initialState, action) {
  switch (
    action.type //evalua el type de acción
  ) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        //se almacena lo del back
      };
    case "GET_NAME_COUNTRY":
      return {
        ...state,
        countries: action.payload,
      };
    case "ORDER_BY_NAME":
      let sortName =
        action.payload === "ascAlf"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: sortName,
      };
    case "ORDER_BY_POBLACION":
      let sortPoblacion =
        action.payload === "descPob"
          ? state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: sortPoblacion,
      };
    /* case "FILTRADO_BY_CONTINENT":
      let arrContinet = [];
      const América = state.countries.filter((c) => c.continents === "américa") return América.push(arrContinent);
      const África = state.countries.filter((c) => c.continents === "áfrica");
      const Antártica = state.countries.filter(
        (c) => c.continents === "antártica"
      );
      const Asia = state.countries.filter((c) => c.continents === "asia");
      const Europa = state.countries.filter((c) => c.continents === "europa");
      const Oceanía = state.countries.filter((c) => c.continents === "oceanía"); */

    default:
      return state;
  }
}

/* Poner const america = state.countries.filter(i=>i.continent === "américa") */
export default rootReducer;
