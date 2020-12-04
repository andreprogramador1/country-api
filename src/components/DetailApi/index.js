import React, {useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function DetailApi() {
  const [data, setData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    async function getContent() {
      try {
        const response = await fetch('https://restcountries.eu/rest/v2/name/'+name);

        const data = await response.json();
        console.log(data)
        setData(data);
  
      } catch (error) {
        console.error(error)
      }
    }
    getContent();
  }, [name]);


  
  return (
   <>
   {data.map((country, index) => (
   
    <li key={index}>
      <div className="card" >
        
        <div className="card-content">
          <img src={country.flag} />
          <div className="inner-card-content">

            <h1>{country.name}</h1>
            <strong>Native Name:</strong>
            <span>{country.nativeName}</span><br/>
            <strong>Population:</strong>
            <span>{country.population}</span><br/>
            <strong>Sub Region:</strong>
            <span>{country.subregion}</span><br/>
            <strong>Region:</strong>
            <span>{country.region}</span><br/>
            <strong>Capital:</strong>
            <span>{country.capital}</span><br/>

            <div className="inner-card-content-2">
              <strong>Top Level Domain:</strong>
              <span>{country.topLevelDomain.join(', ')}</span><br/>
              <strong>Currencies:</strong>
              <span>{country.currencies.map(item => item.name).join(', ')}</span><br/>
              <strong>Languages:</strong>
              <span>{country.languages.map(item => item.name).join(', ')}</span>
            </div>  
            
          </div>

          <div className="bottom-content">
            <h1>Border countries</h1>
            <ul>
              {country.borders.map((item, i) => <li key={i}>{item}</li>)}
            </ul>   
          </div>

        </div>
      </div>
    </li>))}
   
   </>
  );
}
