import React from "react";
import IndiMuseumInfo from "./IndiMuseumInfo";
import IndiMuseumMap from "./IndiMuseumMap";
import YelpNav from "./Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  const url = `http://museum-yelp-api.herokuapp.com/api/museums/${id}`;
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson[0]);
        console.log(data);
      });
  }, [id]);

  /*fetch(".././data.json", {
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
        console.log(myJson[0]);
        setData(myJson[0]);
      });
    */

  return (
    <>
      <YelpNav />
      <div className="container">
        <div className="row">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1596644573834-0aa8d1b4e99f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="placeholder"
          ></img>
        </div>
        <div className="row">
          <div className="col border">
            {data ? <IndiMuseumInfo data={data} /> : "Loading..."}
          </div>
          <div className="col">
            {data ? <IndiMuseumMap data={data} /> : "Loading..."}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
