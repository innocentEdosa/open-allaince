import React, { Component } from 'react'
//import { Link } from "react-router-dom";
import MNavbar from '../../components/navbar';
import MFooter from '../../components/footer';
import axios  from 'axios';
import { customConfig } from '../../../helpers/index';


const filetype = require('../../../assets/pdftype.svg')
const downloadico = require('../../../assets/downloadico.svg')
const loader = require('../../../assets/loader.gif')


export default class Documents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data: {}
      }
    }
    

    componentWillMount () {
        axios.get(`${customConfig.API_URL}/documents/list`)
        .then (
          
            data => {
              console.log('new data',data.data)
                this.setState({data: data.data})
  
              
            
            },
            error => {
              console.log('new error',error)
                // this.setState({msg:data})
  
              
            }
          )
    }


  render() {
      const {data} = this.state;
      console.log('comp', data.data)
      let docs = (data)?data.data:'', documentArr =(docs)?docs
      .map(e=> {
          return (
            <div className="border-right border-left border-top row py-4">
            <div className="col-md-12">
            <span className="mx-md-5 float-left mt-4">{e.timestamp.date.split('-')[0]}</span>
            <span className="mx-md-5 downloadtext float-left text-left">
            <p>{e.name}</p>
            <img alt="" src={filetype} />
            </span>
            <a href={e.src} rel="noopener noreferrer" target="_blank">
                <span className="mx-md-5 float-right downloadbtn px-3 py-2 "><div className="d-inline-block"><span><img alt="" src={downloadico} className="mr-3"/></span>Download</div></span>
                </a>
            </div>
        </div>
          )
      })
      :'';
    return (
      <div>
        {/* <MNavbar /> */}
        <div className="  container my-md-5 pt-5 text-center border-bottom">
          {(this.state.data.data === undefined )?<img src={loader} alt="" width="150px"  height="100px" />:documentArr}
           
        </div>
        <div className="grey-color mt-md-5">

{/* <MFooter /> */}
</div>
      </div>
    )
  }
}
