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
        countries: action.payload, //se almacena lo del back
      };
    default:
      return state;
  }
}

export default rootReducer;
