import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

//components
import YelpNav from './Navbar';
import MuseumCard from './MuseumCard';
/* import data from '../testing/Museums.json'; */

const Homepage = () => {
    const [museums, setMuseums] = useState([]);
   
   const URL = 'http://museum-yelp-api.herokuapp.com/api/museums'
   
   const getData = async () =>{
    try{
      let response = await fetch(URL);
      return await response.json();
    }catch(err){
      console.error(err);
      // Handle errors here
    }
  } 

  
  useEffect(() => {
    //const amount = '5';
    //const query = getBestMuseum(amount);
    getData()
    .then(data => {
        console.log(data)
        const museums =  data.map(item => {
            return {
                city : item.name,
                id : item.id,
                name: item.museumname,
                img : item.image,
                rating : item.rating,
                opening : item.timings

            }
        });
        setMuseums(museums);
    });
}, []);
 

const handleChange = () =>{

}
    
    const imageURL = 'https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1542992626/hki29iojivas3t9w0suu.jpg';

    return (
        <React.Fragment>
             
            <header style={{ backgroundImage: `url(${imageURL})` }}>
                <YelpNav /> 
                <div className="Msearch">
                    <div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" onChange={handleChange} />
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form> 
                    </div>   
                     {/* { museums.map((museum) => ( <Link to={`/city/${museum.city}`}> {museum.city} </Link>))} */}
                     <div className="city-links">
                     <Link to={`/city/Berlin`}> Berlin </Link>
                     <Link to={`/city/Hanover`}> Hanover </Link>
                     <Link to={`/city/Braunschweig`}> Braunschweig </Link>
                     </div>
                </div>
               
                
            </header>
            <div className="homeContent">

                <div className="museums-best">
                  { museums.map((museum) => ( <MuseumCard key={museum.id} museum={museum} />))}
                </div>
            </div>

            

        </React.Fragment>
    );
}; 

export default Homepage;