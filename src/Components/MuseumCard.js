import React from "react";
import { Link } from "react-router-dom";
const MuseumCard = ({museum: { id , name, img, rating, opening}}) => {
     
    
    return (
        <React.Fragment> 
         <Link to={`/details/${id}`}>
            <div className="card">
                {/* <img className="card-img-top" src={img} alt="Card image cap"> */}
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                   
                    <div class="card-text">{opening}</div>
                    <div class="card-text">{rating}</div>
                </div>
            </div>
        </Link>
        </React.Fragment>
    );
} 
export default MuseumCard;

