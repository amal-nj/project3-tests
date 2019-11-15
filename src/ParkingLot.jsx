import React, { Component } from 'react'
import dotenv from 'dotenv';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './App.css';
dotenv.config();

class parkingLot extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      parkingLot: []
    }
  }
  componentDidMount(){
    this.locateMarkers();
  }
  componentDidUpdate(){
    console.log(this.state.parkingLots);

  }
  locateMarkers(){
    let coordDIff=[21.603055-21.603030, 39.107595-39.107593];
    let coordstart=[21.603055,39.107595];
    let cords=[];

    for(let i=0;i<15;i++){
      cords.push({
        lat: coordstart[0]-coordDIff[0]*i,
        lng: coordstart[1]-coordDIff[1]*i
      });
    }
    console.log(cords);
    this.setState({parkingLot: cords});
  }

  displayMarkers = () => {
    return this.state.parkingLot.map((store, index) => {
      let icon=Math.floor(Math.random()*2)?'green-dot':'red-dot'

      return <Marker to="http://maps.google.com/mapfiles/ms/icons/green-dot.png" key={index} id={index} position={{
       lat: store.lat,
       lng: store.lng
     }} 
     icon={{
      url: `http://maps.google.com/mapfiles/ms/icons/${icon}.png`,
    
    }}
     
     onClick={()=>{  document.querySelector('a').setAttribute('href',`http://www.google.com/maps?q=${store.lat},${store.lng}`);
       document.querySelector('a').click()}}
     />
    })
  }

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
      <div>
          <h1>Parking Lot Test</h1>
          <a  rel="noopener noreferrer" style={{display: 'none'}} href="https://www.youtube.com/" target="_blank">click me</a>
          <div className="map">
         <Map
          google={this.props.google}
          zoom={20}
          style={mapStyles}
          initialCenter={{ lat: 21.602982, lng: 39.107513}}
          mapType={'satellite'}
        >
        {this.displayMarkers()}
        </Map>
        </div>
        </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(parkingLot);