import React from 'react'
import {ContainerDropSearch} from './styles'

export default function DropSearchContainer({ region ,setRegion }) {

  return(
    <ContainerDropSearch>
    
      <input type="text" placeholder='search...'/>

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
      
    </ContainerDropSearch>
  );
}