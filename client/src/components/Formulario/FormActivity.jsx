import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Form() {
  const [activity, setActivity] = useState({
    //setActivity modifica activity
    name: "",
    difficulty: "",
    duration: "",
    seasons: "",
  });
  const difficulty = ["1", "2", "3", "4", "5"];
  const seasons = ["Summer", "Spring", "Winter", "Autumn"];

  const [erroresFormulario, setErroresFormulario] = useState({}); //es un obj
  const [errorButton, setErrorButton] = useState(
    Object.keys(erroresFormulario).length < 1 ? false : true
  );

  const expresionName = /^[a-zA-ZñÑáÁéÉíÍóÓuÚ]*$/;
  const expresionDuration = /^[0-9]*$/;

  function handleChange(e) {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value, //name es el input, value lo que recibo
    });
    setErroresFormulario(validar(activity));
    console.log(activity);
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
    setErroresFormulario(validar(activity));
    console.log(activity);
  }

  /*   function handleChangeDuration(e) {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  } */

  async function handleSubmit(e) {
    e.preventDefault();
    setErroresFormulario(validar(activity));
    await axios.post("http://localhost:3001/activity", activity);

    console.log(activity);
  }

  function handleDifficulty(e) {
    setActivity({
      ...activity,
      difficulty: e.target.value,
    });
    console.log(activity);
  }
  function handleSeasons(e) {
    setActivity({
      ...activity,
      seasons: e.target.value,
    });
    console.log(activity);
  }

  function validar(activity) {
    let errores = {};
    if (!activity.name) errores.name = "Campo requerido";
    if (!expresionName.test(activity.name)) errores.name = "Sólo letras";
    if (!activity.seasons) errores.seasons = "Campo obligatorio";
    if (!expresionDuration.test(activity.duration))
      errores.duration = "Sólo números";

    return errores;
  }

  /*  function validName(str) {
    if (typeof str !== "string") return true; //que sea un string
    if (str.length < 1) return true; // 
  } */

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              name="name"
              value={activity.name}
              onChange={handleChange}
              placeholder="completar"
              type="text"
            ></input>
            {erroresFormulario.name ? (
              <h4>
                <small>{erroresFormulario.name}</small>
              </h4>
            ) : (
              false
            )}
            {/* si hay error, mostramelo, sino no */}
            <label>Difficulty</label>
            <select
              name="difficulty"
              value={activity.difficulty}
              onChange={handleDifficulty}
            >
              {difficulty.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
            <label>Duration</label>
            <input
              name="duration"
              value={activity.duration}
              onChange={handleChange}
              placeholder="completar"
            ></input>
            {erroresFormulario.duration ? (
              <h4>
                <small>{erroresFormulario.duration}</small>
              </h4>
            ) : (
              false
            )}
            <label>Seasons</label>
            <select
              name="seasons"
              value={activity.seasons}
              onChange={handleSeasons}
            >
              {seasons.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
              {/* {erroresFormulario.seasons ? (
                <h4>
                  <small>{erroresFormulario.seasons}</small>
                </h4>
              ) : (
                false
              )} */}
            </select>
            <button type="submit" disabled={true}>
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* 
handle maneja todo
Tag de form-->tiene etiquetas-->lebel (muestra titulo input) input (para ingresar datos)
                  -->props-->onSubmit que tengo que hacer cuando quiera   entregar formulario. en este caso "handleSubmit"
              -->input-->props-->nombre, valor y onChange(handleChange)
es un formulario controlado. Hay que ir validando lo que pone usuario
1.funcion para que usuario pueda escribir (handleChange)
2. funcion para enviar formulario (handleSubmit)
3.function validar(datos)
4. useEffect()
5. return
*/
