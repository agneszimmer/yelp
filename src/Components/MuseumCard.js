import React from "react";
import { Link } from "react-router-dom";
const MuseumCard = ({museum: { id , name, img, rating, opening}}) => {
     
    
    return (
        <React.Fragment> 
         <Link to={`/details/${id}`} >
            <div className="m-card" style={{ backgroundImage: `url(${img})` }}>
                <div class="info">
                    <h5 class="name">{name}</h5>
                   
                   <div className="card-footer"> 
                        <div class="hours">{opening}</div>
                        <div class=" ">Rating:{rating}</div>
                    </div>
                </div>
            </div>
        </Link>
        </React.Fragment>
    );
} 
export default MuseumCard;

