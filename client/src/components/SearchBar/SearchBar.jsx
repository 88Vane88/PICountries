import React from "react";
import style from "../SearchBar/SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountry } from "../../actions/index";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameCountry(name));
  }

  return (
    <div className={style.global}>
      <input
        type="text"
        placeholder="Buscar país..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </div>
  );
}
