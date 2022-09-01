import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { postActivities, getCountries } from "../../actions/index";
import { Link } from "react-router-dom";
import style from "../Formulario/FormActivity.module.css";

export default function Form() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const allCountries = useSelector((state) => state.countries);

  const [activity, setActivity] = useState({
    //setActivity modifica activity
    name: "",
    difficulty: "",
    duration: "",
    seasons: "",
    country: [],
  });

  const [erroresFormulario, setErroresFormulario] = useState({}); //es un obj

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

  async function handleSubmit(e) {
    e.preventDefault();
    setErroresFormulario(validar(activity));
    await axios.post("http://localhost:3001/activities", activity);

    console.log(activity);
  }

  function handleDifficulty(e) {
    setActivity({
      ...activity,
      difficulty: e.target.value,
    });
    console.log(activity);
  }

  function handleCountries(e) {
    setActivity({
      ...activity,
      countries: [...activity.country, e.target.value],
    });
  }

  function handleSeasons(e) {
    setActivity({
      ...activity,
      seasons: e.target.value,
    });
    console.log(activity);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(postActivities(activity));
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

  return (
    <div className={style.contenedor}>
      <h1>Crear Actividad</h1>
      <div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.form_grupos}>
            <input
              className={style.form_input}
              name="name"
              id="name"
              value={activity.name}
              onChange={handleChange}
              placeholder=" "
              type="text"
            />
            <label className={style.form_label} htmlFor="name">
              Name:{" "}
            </label>
            {erroresFormulario.name ? (
              <span className={style.error}>{erroresFormulario.name}</span>
            ) : null}
          </div>
          <br />
          <div className={style.form_grupos}>
            <input
              className={style.form_input}
              name="duration"
              value={activity.duration}
              onChange={handleChange}
              placeholder=" "
              type="number"
              id="duration"
            />
            <label className={style.form_label}>Duration: </label>
            {erroresFormulario.duration ? (
              <span className={style.error}>{erroresFormulario.duration}</span>
            ) : null}
          </div>
          <br />
          <div className={style.form_grupos}>
            <select
              name="difficulty"
              id="difficulty"
              value={activity.difficulty}
              onChange={handleDifficulty}
            >
              <option>Difficulty</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <br />
          <div>
            <select
              name="seasons"
              id="seasons"
              value={activity.seasons}
              onChange={handleSeasons}
            >
              <option>Season</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </select>
          </div>
          <br />
          <div>
            <select onChange={handleCountries} name="countries" id="countries">
              <option>Elegir Countries</option>
              {allCountries?.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.name}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div className={style.submit}>
            <button
              type="submit"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Crear
            </button>
            {postActivities.id ? <span>Creado exitosamente</span> : null}
          </div>
          <div className={style.volver}>
            <Link to="/home">Volver</Link>
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
