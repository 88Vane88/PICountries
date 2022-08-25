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

console.log(getCountries());
/* export function createActivity() {
  return async function (dispatch) {};
} */
