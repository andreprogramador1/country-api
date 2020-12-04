import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

export default function FetchApi({ region }) {
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    async function getContent() {
      try {
        const response = await fetch(region === 'All' ? 'https://restcountries.eu/rest/v2/all' : 'https://restcountries.eu/rest/v2/region/'+ region)

        const data = await response.json()
  
        setData(data);
    
      } catch (error) {
        console.error(error)
      }
    }
    getContent();
  }, [region]);


  
  return (
   <>
   {data.map((country, index) => (<li key={index}><Link  to={'/detail/'+country.name} className="card" style={{ textDecoration: 'none', color: 'black' }}>
        
        <div className="card-content">
          <img src={country.flag}/>
          <div className="inner-card-content">
            <h1>{country.name}</h1>
            <strong>Population:</strong>
            <span>{country.population}</span><br/>
            <strong>Region:</strong>
            <span>{country.region}</span><br/>
            <strong>Capital:</strong>
            <span>{country.capital}</span>
          </div>
          
        </div>
      </Link></li>))}
   
   </>
  );
}
