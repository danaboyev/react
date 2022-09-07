import Karta from'./Karta'
import {useJsApiLoader} from '@react-google-maps/api'
import React from 'react'
import '../styles/Map.scss'
const API_KEY = process.env.REACT_APP_API_KEY

const defaultCenter = {
  lat: 41.311744,
  lng: 69.240753
};

const libraries = ['places']
export default function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries
  })
  return (
    <div className='Map'>
      { isLoaded ? <Karta center={defaultCenter}  /> : <h2>Loading</h2> }
    </div>
  )
}
