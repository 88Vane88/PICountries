import React from "react";
import { useState } from "react";

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
  const [errorButton, setErrorButton] = useState(true);
  const [erroresFormulario, setErroresFormulario] = useState({}); //es un obj

  function handleChange(e) {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value, //name es el input, value lo que recibo
    });
    setErroresFormulario(validar(activity));
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
    setErroresFormulario(validar(activity));
  }

  /*   function handleChangeDuration(e) {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  } */

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleDifficulty(e) {
    setActivity({
      ...activity,
      difficulty: e.target.value,
    });
  }
  function handleSeasons(e) {
    setActivity({
      ...activity,
      seasons: e.target.value,
    });
  }
  function validar(datos) {
    let errores = {};
    if (!datos.name) errores.name = "Campo requerido";
    if (typeof datos.name !== "string") errores.name = "Debe ser un string";
    /* if(validName(datos.name)) errores.name="" */

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
            ></input>
            {erroresFormulario.name ? (
              <h4>
                <small>{erroresFormulario.name}</small>
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
            </select>
            <button type="submit" disabled={errorButton ? true : false}>
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
