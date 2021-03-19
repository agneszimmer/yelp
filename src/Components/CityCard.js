import React from "react";
import "../App.css";

const CityCard = ({museum}) => {
    return (
        <div className='row'>
            <div className='col-5'>
                <img className='card-img' src={museum.img} alt={museum.name} />
            </div>
            <div className="col-7 align-self-center" >
                <h6>{museum.name}</h6>
                <p>{museum.link}</p>
            </div>
        </div>
        );
};

export default CityCard;