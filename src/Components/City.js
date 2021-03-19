
import { useState, useEffect } from 'react';
import CityCard from  "./CityCard.js";
import Map from "./CityMap.js"
import YelpNav from './Navbar';


const City = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

// const fetchData = () => {
//     fetch("http://museum-yelp-api.herokuapp.com/api/museums", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then(res => res.json)
//       .then(data => setData(data));
//   };

  useEffect(() => {
    fetch('http://museum-yelp-api.herokuapp.com/api/museums')
	    .then(response => response.json())
	    .then(data => setData(data))
	    .catch(err => console.error(err));
  }, []);

  const museums = data.map(museum => {
    return {id: museum.id,
    name: museum.name,
    img: museum.image,
    lon: museum.longitude,
    lat: museum.latitude,
    link: museum.link,
    adress: museum.adress
    }
  })

  console.log(museums)

  return (
    <div>
      <YelpNav />
      <div className="container">
        <div className="col">
         {museums.map((museum) => (<CityCard key={museum.id} museum={museum} />))}
        </div>
        <div className="col">
        <Map museums={museums} />          
        </div>
      </div>
    

    </div>
  );
};

export default City;

