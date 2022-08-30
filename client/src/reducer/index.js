/* import { GET_COUNTRIES } from "../actions"; */

const initialState = {
  countries: [],
  allCountries: [], //copia del estado de todos los personajes
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
        allCountries: action.payload,
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
    case "FILTRADO_BY_CONTINENT":
      const allCountries = state.allCountries;
      const statusFilter =
        action.payload === "Todos"
          ? allCountries
          : allCountries.filter((el) => el.continents === action.payload); //el.status seria el e.value.value
      return {
        ...state,
        countries: statusFilter,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    /*     case "POST_ACTIVITIES": //lo creo en una ruta nueva
      return {
        ...state,
      }; */

    default:
      return state;
  }
}

/* Poner const america = state.countries.filter(i=>i.continent === "américa") */
export default rootReducer;
