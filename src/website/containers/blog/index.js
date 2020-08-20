import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import MNavbar from '../../components/navbar';
import MFooter from '../../components/footer';
import axios from "axios";
import { customConfig } from '../../../helpers/index';


// import MAboutTab from '../../components/about-tab';
// import MMembersTab from '../../components/members-tab';
// const aboutActive = require('../../../assets/blue-about.svg')
// const aboutWhite = require('../../../assets/white-about.svg')
// const membActive = require('../../../assets/blue-memb.svg')
//const membWhite = require('../../../assets/white-memb.svg')
// const blogpicthumb = require('../../../assets/picboard.png')
const loader = require('../../../assets/loader.gif')



class Blog extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data:{}
      }
    }


    componentWillMount () {
      axios.get(`${customConfig.API_URL}/news/list`)
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
    let blogs = (data)?data.data:''
    ,blogArr =(blogs)?blogs
    .map(e=> {
      return (
        <div className="col-md-4">
            <Link to={"/blog-details/"+e.id}>
              <div className="c-card2" style={{maxHeight:"330px", minHeight:"330px"}}>
                <div className="img-holder">
                  <img alt='' src={e.banner} width="100%" height="200px" />
                </div>
                <div className="py-4 px-3">
                  <p className="c-blog-h4">{e.title}</p>
                  <p className="c-blog-h5">{e.updated_at.split(' ')[0]}</p>
                </div>
              </div>
            </Link>
            </div>
        )
      })
      :'';
      console.log('blogs', blogArr)
      
    return (
      <div>
        {/* <MNavbar /> */}
        <div className="container my-md-5 py-5">
          <div className="row">
          {(this.state.data.data === undefined )?<div className="text-center d-block w-100"><img src={loader} alt="" width="150px"  height="100px" /></div>:blogArr}
           
           
          </div>
          <div className="container">
            <div className="row">
              <div className="offset-md-3 col-md-4 mx-auto mt-5 text-center ">
                  {/* <div className=" btn-solid-primary-inv d-inline py-2 px-3 btn-normal">
                    See More
                  </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="grey-color">

{/* <MFooter /> */}
</div>
      </div>
    )
  }
}


export default withRouter(Blog)