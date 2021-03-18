import React, {useState, useEffect} from 'react';

//components
import YelpNav from './Navbar';
import MuseumCard from './MuseumCard';

const Homepage = () => {
    const [best, setBest] = useState([]);

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
    
    return (
        <React.Fragment>
            <YelpNav />   
            
            <div className="homeContent">
                <div className="museums-best">
                  { best.map((museum) => ( <MuseumCard key={museum.id} best={museum} />))}
                </div>
            </div>

            

        </React.Fragment>
    );
}; 

export default Homepage;