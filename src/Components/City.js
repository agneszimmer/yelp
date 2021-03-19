
import { useState, useEffect } from 'react';
import Card from  "./CityCard.js";
import Map from "./CityMap.js"
import YelpNav from './Navbar';


const City = () => {
  const [museums, setMuseums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getMuseums = () => {
      setLoading(true);
      setError();
      fetch('.././data.json')
        .then(res => res.json())
        .then(({ museums }) => {
          setMuseums(museums);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    };
  }, []);

  return (
    <div>
      {/*
      <YelpNav />
      <h1>hello</h1>
      <div className="container">
        {museums.map(())}
        {museum.map(museum => 
        <Card />
        <Map lat={city.lat} lon={city.lon} />  lat & lon of museums[0] ??
      </div>
      */}

    </div>
  );
};

export default City;

