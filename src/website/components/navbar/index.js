import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
     } from 'reactstrap';
     import { NavLink } from "react-router-dom";

     const logo = require('../../../assets/logo.svg')


export default class MNavbar extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
  render() {
    return (
        // <div className="">
        <Navbar color="white" light expand="md" className="c-shadow-lg sticky-top c-z-depth0in">
           <NavbarBrand><NavLink to="/" className="ml-md-3"><img  alt='' src={logo} width="200" className="mx-md-5 my-md-3" /></NavLink></NavbarBrand>
           <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="mx-auto mt-3" navbar>
               <NavItem>
                 <NavLink to="/about/" activeClassName="active" className="menu-link mr-md-5 pb-3">ABOUT US</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink to="/commitments/" className="menu-link mr-md-5 pb-3">COMMITMENTS</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink to="/blog/" className="menu-link mr-md-5 pb-3">BLOG</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink to="/documents/" className="menu-link mr-md-5 pb-3">DOCUMENTS</NavLink>
               </NavItem>
              
             </Nav>
             <Nav className="ml-auto" navbar>
               <NavItem>
                 <a href="https://admin.openalliance.ng" target="_blank" rel="noopener noreferrer" className="btn-solid-primary mt-md-1 mr-md-5 float-right">&nbsp;&nbsp;&nbsp;SIGN IN&nbsp;&nbsp;&nbsp;</a>
               </NavItem>
             </Nav>
           </Collapse>
         </Navbar>
    //  </div>
    )
  }
}
