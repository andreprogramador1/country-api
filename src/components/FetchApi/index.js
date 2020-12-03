import React, {useState, useEffect} from "react";

export default function FetchApi() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getContent() {
      try {
        const response = await fetch('https://restcountries.eu/rest/v2/region/europe')
        
        //console.log(response)
        const data = await response.json()
        //console.log(flag)
  
        setData(data);
    
      } catch (error) {
        console.error(error)
      }
    }
    getContent();
  }, []);
  
  return (
   <>
   {data.map((country, index) => (<li key={index}><div className="card">
        
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
      </div></li>))}
   
   </>
  );
}
