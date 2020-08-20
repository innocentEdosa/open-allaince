import React, { Component } from 'react'
import { Link } from 'react-router-dom';


// const logo = require('../../../assets/logo.svg')
const osiwa = require('../../../assets/osiwa.svg')
const partnersglobal = require('../../../assets/partnersglobal.svg')
const fordfoundation = require('../../../assets/fordfoundation.svg')
const facebook = require('../../../assets/facebook.svg')
const twitter = require('../../../assets/twitter.svg')


export default class MFooter extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      //  <div className="container mt-5 footer-container">
      <div className="container mt-5">
        <div className=" pt-5 text-center pb-5 mb-0">
          <p className="text-center c-h3"> Join us in our mission to promote openness and transparency in Nigeria </p>
          <Link to="/register">
            <div className="btn-solid-primary mt-4 mb-5 text-center mx-auto py-3" style={{ width: "12em", cursor: "pointer" }}>
              Get Involved
                    </div>
          </Link>
          <div className="footnav d-inline-block mt-5">
            <ul className="nav">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/commitments">Commitments</Link></li>
              <li><Link to="/blog">Our Blog</Link></li>
              <li><Link to="/documents">Documents</Link></li>
              <li><Link to="/about">Members</Link></li>
            </ul>
          </div>
          <div className="partners d-inline-block mt-5">
            <p className="c-p pl-3 text-left mt-2">Brought to you by</p>
            <ul className="nav">
              <li><a href="http://www.osiwa.org/"><img alt='' className="mt-3" src={osiwa} width="100%" /></a> </li>
              <li><a href="https://www.partnersglobal.org/"><img alt='' className="mt-3 mr-md-0" src={partnersglobal} width="130%" /></a> </li>
              <li><a href="https://www.fordfoundation.org/"><img alt='' className="mt-3 ml-md-4" src={fordfoundation} width="130%" /></a> </li>
              <li></li>
              <li></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/OpenAllianceNG/"><img alt='' src={facebook} /></a> </li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/OpenAllianceNG"><img alt='' src={twitter} /></a> </li>
            </ul>
          </div>
          <div className="footnav d-inline-block mt-4">
            <p className="c-p2">Copyright &copy; 2019 Open Alliance . All rights reserved. Made in Lagos by BudgIT</p>
          </div>
        </div>

      </div>
    )
  }
}
