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
  //para la searchBar
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
export function getDetail(id) {
  return async function (dispatch) {
    try {
      var pedidoApi = await axios.get(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: "GET_DETAIL",
        payload: pedidoApi.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
/* export const postActivities = (data) => {
  return async function (dispatch) {
    fetch("http://localhost:3001/activities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((json) => dispatch({ type: "CREATE_ACTIVITY", payload: json }));
  };
}; */

export function postActivities(data) {
  return async function (dispatch) {
    const info = await axios.post("http://localhost:3001/activities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return dispatch({
      type: "POST_ACTIVITY",
      payload: info.info,
    });
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
