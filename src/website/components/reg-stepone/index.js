
import React, { Component } from 'react'


export default class RegStepOne extends Component {

    constructor(props) {
        super(props);
    
        this.state = {

        };
      }
    
  render() {
    return (
       
                <div className="c-card3 py-5 ">
                  <div className="border-bottom my-5">
                    <p className="c-mile-h3">Hello</p>
                    <p className="loginsub">We are excited you're here, Please fill the form below</p>
                  </div>
                  <div className="form">
                    <p className="label">Company Name</p>
                    <input className="form-control py-4 mb-4" placeholder="e.g. Budgit" type="text" />
                    <p className="loginsub">Company Email Address</p>
                    <input className="form-control py-4 mb-5 " placeholder="e.g. ayomide@budgit.com" type="text" />
                    <div className="btn-solid-primary py-3 text-center">
                      Next
                    </div>
                  </div>
                </div>
              
    )
  }
}






