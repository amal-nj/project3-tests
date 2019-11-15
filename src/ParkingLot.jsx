import React, { Component } from "react";
import dotenv from "dotenv";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./App.css";
dotenv.config();

class parkingLot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parkingLot: [],
      markers: "",
      href: ""
    };
  }
  componentDidMount() {
    console.log("component did mount!");
    this.locateMarkers();
  }
  componentDidUpdate() {
    console.log(this.state);
    if (
      JSON.stringify(this.displayMarkers()) !==
      JSON.stringify(this.state.markers)
    ) {
      this.setState({ markers: this.displayMarkers() });
    }
  }
  locateMarkers() {
    let coordDIff = [21.603055 - 21.60303, 39.107595 - 39.107593];
    let coordstart = [21.603055, 39.107595];
    let cords = [];

    for (let i = 0; i < 15; i++) {
      cords.push({
        lat: coordstart[0] - coordDIff[0] * i,
        lng: coordstart[1] - coordDIff[1] * i,
        icon: Math.floor(Math.random() * 2) ? "green-dot" : "red-dot"
      });
    }
    console.log(cords);
    this.setState({ parkingLot: cords });
  }

  displayMarkers = () => {
    console.log("display markers was called");
    return this.state.parkingLot.map((store, index) => {
      return (
        <Marker
          to="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
          key={index}
          id={index}
          position={{
            lat: store.lat,
            lng: store.lng
          }}
          icon={{
            url: `http://maps.google.com/mapfiles/ms/icons/${store.icon}.png`
          }}
          onClick={() => {
            {/* console.log(document.querySelector("a"));
            document
              .querySelector("a")
              .setAttribute(
                "href",
                `http://www.google.com/maps?q=${store.lat},${store.lng}`
              ); */}
              this.setState({href:`http://www.google.com/maps?q=${store.lat},${store.lng}`});
            document.getElementById('map').click();
          }}
        />
      );
    });
  };

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };

    return (
      <div>
        <h1>Parking Lot Test</h1>
        <a
          style={{display:'none'}}
          id='map'
          href={this.state.href}
          target="_blank"
          onClick={(e) => {
            console.log("i'm clicked");
          }}
        >
          click me
        </a>
        <div className="map">
          <Map
            google={this.props.google}
            zoom={20}
            style={mapStyles}
            initialCenter={{ lat: 21.602982, lng: 39.107513 }}
            mapType={"satellite"}
          >
            {this.state.markers}
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(parkingLot);
