import React from 'react'
import "./styles/LocationInfo.css"

const LocationInfo = ({ location }) => {
  return (
    <section className='locationInfo'>
      <h2 className='locationInfo_name'>{location?.name}</h2>
      <ul className='locationInfo_list'>
        <li className='locationInfo_item'><span>Type: </span>{location?.type}</li>
        <li className='locationInfo_item'><span>Dimension: </span>{location?.dimension}</li>
        <li className='locationInfo_item'><span>Population: </span>{location?.residents.length}</li>
      </ul>
    </section>
  )
}

export default LocationInfo