import React from 'react'
import {ContainerDropSearch} from './styles'

export default function DropSearchContainer() {
  return(
    <ContainerDropSearch>
    
      <input type="text" placeholder='search...'/>

      <select name="cars" id="cars">
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
  
    </ContainerDropSearch>
  );
}