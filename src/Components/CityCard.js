import React from "react";

const CityCard = ({museum}) => {
    return (
        <div className='row'>
            <div className='col'>
                <img className='card-img' src={museum.img} alt={museum.name} />
            </div>
            <div className='col'>
                <h4 className='museum-name'>{museum.name}</h4>
                <p>{museum.link}</p>
            </div>
        </div>
        );
};

export default CityCard;