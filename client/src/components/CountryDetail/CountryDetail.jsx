import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions/index";
import { useEffect } from "react";

export default function Detail(props) {
  console.log(props);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  });

  const myCountry = useSelector((state) => state.detail);

  return (
    <>
      <div>Nombre : {myCountry.name}</div>
      <div>Continente: {myCountry.continents}</div>
      <div>Capital: {myCountry.capital}</div>
      <div>SubRegion: {myCountry.subregion}</div>
      <div>Area: {myCountry.area}</div>
      <div>Population: {myCountry.population}</div>
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
      <img src={myCountry.flags} alt={myCountry.name} />
      <div>
        <Link to="/home">
          <button>Regresar</button>
        </Link>
      </div>
    </>
  );
}
