import React from "react";
import IndiMuseumInfo from "./IndiMuseumInfo";
import IndiMuseumMap from "./IndiMuseumMap";
import { useEffect, useState } from "react";

const Details = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(".././data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <img
          className="img-fluid"
          src="https://i.stack.imgur.com/y9DpT.jpg"
          alt="placeholder"
        ></img>
      </div>
      <div className="row">
        <div className="col border">
          <IndiMuseumInfo />
        </div>
        <div className="col">
          <IndiMuseumMap />
        </div>
      </div>
    </div>
  );
};

export default Details;
