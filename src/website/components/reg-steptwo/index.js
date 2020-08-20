
import React, { Component } from 'react'

const back = require('../../../assets/backbtn.svg')
const upload = require('../../../assets/upload.svg')

export default class RegStepTwo extends Component {

    constructor(props) {
        super(props);
    
        this.state = {

        };
      }
    
  render() {
    return (
       
        <div className="c-card3 pb-5 ">
          <div className="border-bottom mb-5">
            <div>
              <img src={back} alt='' />
            </div>
            <p className="c-mile-h3 mt-5">You're almost done</p>
            <p className="loginsub">Step 2</p>
          </div>
          <div className="form">
            <p className="label">Brief Description</p>
            <textarea className="form-control py-4 mb-4" placeholder="e.g. Budgit"></textarea>
            
            <div class="upload-btn-wrapper">
              <button class="smltxt py-2 px-2 mb-5">Upload a Logo
              <img src={upload} className="pl-3" alt='' />
              
              </button>
              <input type="file" name="myfile" />
            </div>

            {/* <input className="py-4 mb-5 " placeholder="e.g. ayomide@budgit.com" type="file" /> */}
            <div className="btn-solid-primary py-3 text-center">
              Join
            </div>
          </div>
        </div>
      
       
    )
  }
}






