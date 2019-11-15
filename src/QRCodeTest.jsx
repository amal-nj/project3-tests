import React, { Component } from "react";
import QRCode from "qrcode.react";
export default class QRCodeTest extends Component {
    constructor(props){
        super(props);
        this.state={
            fname: "",
            lname: '',
            show: false
        }
        this.fnameChange=this.fnameChange.bind(this);
        this.lnameChange=this.lnameChange.bind(this);

    }
  
    getText(){
     
        console.log(document.getElementsByName('firstname'));
        
        return 'klam'
    }
    fnameChange(event){
        this.setState({fname: event.target.value});
    }
    lnameChange(event){
        this.setState({lname: event.target.value});
    }
  render() {
    const QR=this.state.show?<QRCode style={{padding: '50px'}} value={`${this.state.fname} ${this.state.lname}`} />:"";
    return (
      <div>
        <form name="myForm"  > 
          First name:
          <br />
          <input type="text" name="firstname" onChange={this.fnameChange}/>
          <br />
          Last name:
          <br />
          <input type="text" name="lastname" onChange={this.lnameChange}/>
          <br />
          <br />

          <input type="button" value="Show QR Code" onClick={()=>this.setState({show:true})} />
        </form>
            {QR}
      </div>
    );
  }
}
