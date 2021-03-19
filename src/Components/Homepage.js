import React, {useState, useEffect} from 'react';

//components
import YelpNav from './Navbar';
import MuseumCard from './MuseumCard';

 
const Homepage = () => {
    const [museums, setMuseums] = useState([]);
   
   const URL = '.././data.json'

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
    /* const amount = '5';
    const query = getBestMuseum(amount); */
    getData()
    .then(data => {
        const museums =  data.map(item => {
            return {
                id : item.id,
                name: item.name,
                img : item.image,
                rating : item.Rating.average,
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
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" onChange={handleChange} />
                        <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>    
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
