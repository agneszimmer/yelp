
import { useState, useEffect } from 'react';
import CityCard from  "./CityCard.js";
import Map from "./CityMap.js"
import YelpNav from './Navbar';


const City = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch('http://museum-yelp-api.herokuapp.com/api/museums')
	    .then(response => response.json())
	    .then(data => setData(data))
	    .catch(err => console.error(err));
  }, []);

  const museums = data.map(museum => {
    return {id: museum.id,
    city: museum.name,
    name: museum.museumname,
    img: museum.image,
    lon: museum.longitude,
    lat: museum.latitude,
    link: museum.link,
    adress: museum.adress,
    description: museum.description
    }
  })

  console.log(museums)

  return (
    <div>
      <YelpNav />
      <div className="container-fluid">
        <div className="row sidebar">
        <div className="col-3" >
         {museums.map((museum) => (<CityCard key={museum.id} museum={museum} />))}
        </div>
        <div className="col-9">
        <Map museums={museums} />          
        </div>
        </div>
      </div>
     

    </div>
  );
};

export default City;

