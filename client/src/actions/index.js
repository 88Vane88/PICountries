import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    var pedidoApi = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: pedidoApi.data,
    });
  };
}
export function getNameCountry(name) {
  return async function (dispatch) {
    try {
      var pedidoApi = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      return dispatch({
        type: "GET_NAME_COUNTRY",
        payload: pedidoApi.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}
export function orderByPoblacion(payload) {
  return {
    type: "ORDER_BY_POBLACION",
    payload,
  };
}
export function filtradoByContinent(payload) {
  return {
    type: "FILTRADO_BY_CONTINENT",
    payload,
  };
}

console.log(getCountries());
/* export function createActivity() {
  return async function (dispatch) {};
} */
