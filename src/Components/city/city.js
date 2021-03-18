import { useState, useEffect } from 'react';
import "./city.css";
import Card from ""../CityCard.js";
import Map from "..CityMap.js"

const City = () => {
    const [museums, setMuseums] = useState([]) 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

useEffect(() => {
  const getMuseums = () => {
    setLoading(true);
    setError();
    fetch('https://cdn.discordapp.com/attachments/819961212733358162/822145829016043570/Museums_V01.json')
        .then(res => res.json())
        .then(({museums}) => {
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
    <Header />
    {museum.map(museum => <Card />
    <Map lat={lat} lon={array.lon} />   
  </div>)
  }

