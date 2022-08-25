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
        `http://localhost:3001/countries/${name}`
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

console.log(getCountries());
/* export function createActivity() {
  return async function (dispatch) {};
} */
