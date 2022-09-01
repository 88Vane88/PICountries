import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions/index";
import { useEffect } from "react";
import style from "../CountryDetail/CountryDetail.module.css";

export default function Detail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, []);

  const myCountry = useSelector((state) => state.detail);

  return (
    <div className={style.img}>
      <div className={style.global}>
        <div>
          <img
            className={style.flag}
            src={myCountry.flags}
            alt={myCountry.name}
          />
        </div>
        <div className={style.info}>
          <div className={style.pais}>Nombre : {myCountry.name}</div>
          <div className={style.cont}>Continente: {myCountry.continents}</div>
          <div className={style.pob}>Población: {myCountry.population}</div>
        </div>

        {myCountry.activities
          ? myCountry.activities.map((c) => {
              return (
                <>
                  <div>Activity Name : {c.name}</div>
                  <div>Activity difficulty : {c.difficulty}</div>
                  <div>Activity duration : {c.duration}</div>
                  <div>Activity seasons : {c.seasons}</div>
                  <div>Activity id : {c.id}</div>
                </>
              );
            })
          : null}

        <div className={style.button}>
          <Link className={style.buttonReg} to="/home">
            <button>Regresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
