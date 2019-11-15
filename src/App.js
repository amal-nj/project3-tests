import React, { Component } from 'react'
import ParkingLot from './ParkingLot'

export default class App extends Component {
  render() {
    return (
      <div>
        <a>Parking lot test</a>
        <a>QR code test</a>

        <ParkingLot/>
      </div>
    )
  }
}
