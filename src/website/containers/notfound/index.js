import React, { Component } from 'react'
import { Link } from "react-router-dom";
import MNavbar from '../../components/navbar';
// import MFooter from '../../components/footer';


export default class Notfound extends Component {
    constructor(props) {
      super(props)
    
      this.state = {

      }
    }
    
  render() {
    return (
      <div className="">
        {/* <MNavbar /> */}
      <div className="c-404bg">
        <div className="container mx-auto text-center">
           <p className="c-404txt" style={{paddingTop:'15em', marginTop:'1em'}}>Sorry the page you requested could not be found</p>
           <Link to="/">
                <div className="mx-auto btn-solid-primary py-4 w-25">
                GO BACK HOME
               </div>
            </Link>
        </div>
        </div>
        {/* <MFooter /> */}
      </div>
    )
  }
}
