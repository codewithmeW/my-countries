import { useState } from 'react';
import './Country.css';
const Country = ({country,handleCountryClick }) => {
    const {name,flags,area,capital,cca3} = country;


    const [visited,setVisited]=useState(false)
    const handelVisited =()=>{
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited?'visited':'not-visited' } `}>
            <h3>Name:{name?.common}</h3>
            
            <img src={flags.png} alt="" />
            <h3>Area:{area}</h3>
            <h3>Capital:{capital}</h3>
            <p><small>Code:{cca3}</small></p>
            <button onClick={handelVisited}>{visited?'visited':'want to visit'}</button>
            <button onClick={handleCountryClick }>Mark visited</button>
            {visited && 'i have travel this country.'}
        </div>
    );
};

export default Country;  