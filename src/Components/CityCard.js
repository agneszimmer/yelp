const CityCard = ({name, img, link, theme}) => {
    return (
        <div className='row'>
            <div className='col'>
                <img className='card-img' src={img} alt={name} />
            </div>
            <div className='col'>
                <h4 className='museum-name'>{name}</h4>
                <p>{theme}</p>
            </div>
        </div>
        );
};

export default CityCard;