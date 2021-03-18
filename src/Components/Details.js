import React from "react";
import IndiMuseumInfo from "./IndiMuseumInfo";
import IndiMuseumMap from "./IndiMuseumMap";

const Details = () => {
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
