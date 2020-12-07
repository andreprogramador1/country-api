import React, { useEffect, useState } from 'react'
import {ContainerDropSearch} from './styles'
import { Link } from 'react-router-dom'

export default function DropSearchContainer() {

 
  const [search, setSearch] = useState('')
  // const [filteredCountries, setFilteredCountries] = useState([])
  const [region, setRegion] = useState('All')
  const [data, setData] = useState([])

 

  // useEffect(() => {
  //   setFilteredCountries(
  //     data.filter( country => {
  //       return country.name.toLowerCase().includes(search.toLowerCase())
  //     })
  //   )
  // }, [search, data])

  //-----------------------------USE-EFFECT-REGION-------------------------------------------------------------------------------
  useEffect(() => {
    async function getContent() {
      try {
        const response = await fetch(region === 'All' ? 'https://restcountries.eu/rest/v2/all' : 'https://restcountries.eu/rest/v2/region/'+ region)

        const data = await response.json()

        setData(data)
    
      } catch (error) {
        console.error(error)
      }
    }
    getContent();
  }, [region]);


  return(
   
    <ContainerDropSearch>
      
      <div className="desktop-drop-search">

        <input type="text" placeholder='search...' onChange={e => setSearch(e.target.value)}/>

        <select onChange={(e) => {
          const selectedRegion = e.target.value;
          setRegion(selectedRegion)
        }}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

      </div>
      

      
      {<div className="card-master-container">{ data.filter( country => {
          return search === '' ? true :  country.name.toLowerCase().includes(search.toLowerCase())
        }).map((country, index) => (<li key={index}><Link  to={'/detail/'+country.name} className="card" style={{ textDecoration: 'none', color: 'black' }}>
      

        <div className="card-content">
          <img src={country.flag}/>
          <div className="inner-card-content">
            <h1>{country.name}</h1>
            <strong>Population:</strong>
            <span>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</span><br/>
            <strong>Region:</strong>
            <span>{country.region}</span><br/>
            <strong>Capital:</strong>
            <span>{country.capital}</span>
          </div>
          
        </div>
      </Link></li>))}
      </div> 
      }
      
    </ContainerDropSearch>
  );
}