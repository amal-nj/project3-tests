import React, { Component } from 'react'
import ParkingLot from './ParkingLot'
import QRCodeTest from './QRCodeTest'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/parking">ParkingLotTest</Link>
            </li>
            <li>
              <Link to="/QRCode">QRCodeTest</Link>
            </li>
          </ul>
        </nav>

    
        <Switch>
          <Route exact path="/parking" component={ParkingLot}/>
          <Route exact path="/QRCode" component={QRCodeTest}/>

      
        </Switch>
      </div>
    </Router>
    )
  }
}
