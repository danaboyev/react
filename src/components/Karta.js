import React from 'react'
import { GoogleMap } from '@react-google-maps/api'
import '../styles/Karta.scss'
import {defaultTheme} from './Theme'

const containerStyle = {
    width: '1140px',
    height: '400px'
  };
const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme

}

  
export default function Karta({center}) {

    const mapRef = React.useRef(undefined)



    const onLoad = React.useCallback(function callback(map) {
        
        mapRef.current = map
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined
      }, [])
    
  return (
    <div className='container'>
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
            >
           
            
            </GoogleMap>  
    </div>
  )
}
