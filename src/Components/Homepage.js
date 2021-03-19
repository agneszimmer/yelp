import React, {useState, useEffect} from 'react';

//components
import YelpNav from './Navbar';
import MuseumCard from './MuseumCard';

const data = ".././data.json";

const Homepage = () => {
    const [best, setBest] = useState([]);
    console.log(data)
    
    const museums =  data.map(item => {
        return {
            id : item.id,
            name: item.name,
            img : item.image,
            rating : item.Rating.average,
            opening : item.timings

        }
    });
   

    /* const URL = ''
    const getData = async (query) => {
        const res = await fetch( URL).then(response => response.text())
        return await res.json()
      }

    useEffect(() => {
        const amount = '';
        const query = getBestMuseum(amount);
        getData(query)
        .then(res => { 
            const museum  = res.data.museum.map(info => {
                return {
                    img : info.url,
                    name: info.name,
                    location: info.city,
                    stars: info.rating,
                    id: info.id                    
                }
            });
            setBest(museum);
        }); 

    }, []); */

    
    const imageURL = 'https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/v1542992626/hki29iojivas3t9w0suu.jpg';

    return (
        <React.Fragment>
             
            <header style={{ backgroundImage: `url(${imageURL})` }}>
                <YelpNav /> 
                <div className="Msearch">
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" value='{state.value}' onChange='{handleChange}' />
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