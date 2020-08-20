import React, { Component } from 'react'
import MNavbar from '../../components/navbar';
import MFooter from '../../components/footer';
import MAboutTab from '../../components/about-tab';
import MMembersTab from '../../components/members-tab';
const aboutActive = require('../../../assets/blue-about.svg')
const aboutWhite = require('../../../assets/white-about.svg')
const membActive = require('../../../assets/blue-memb.svg')
const membWhite = require('../../../assets/white-memb.svg')


export default class About extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         members:false
      }
    }
    
  render() {
    return (
      <div>
      <div className="pb-md-5">

        {/* <MNavbar /> */}
        <div className="row mt-md-5">
            <div className="offset-md-3 col-md-6">
            <div className=" c-overflow about-menu ">
                <div className="float-left  menu-item" onClick={()=>{this.setState({members: false})}}>
                    <img src={(!this.state.members)?aboutActive:aboutWhite} width="100%" alt="about"/>
                </div>
                <div className="float-left  menu-item" onClick={()=>{this.setState({members: true})}}>
                    <img src={(this.state.members)?membActive:membWhite} width="100%" alt="about"/>
                </div>
            </div>
            </div>
        </div>
        {(!this.state.members)?<MAboutTab />:
        <MMembersTab />}


        </div>
        <div className="grey-color">

        {/* <MFooter /> */}
        </div>
      </div>
    )
  }
}
