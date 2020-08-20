import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import MNavbar from "../../components/navbar";
import MFooter from "../../components/footer";
import { customConfig } from "../../../helpers/index";
import axios from "axios";
import Parser from "html-react-parser";
import Feedback from "../../components/feedbackform";
const loader = require("../../../assets/loader.gif");
// import Commitments from '../commitment/index';

//  const filetype = require('../../../assets/pdftype.svg')
const ico1 = require("../../../assets/ico1.svg");
const ico2 = require("../../../assets/ico2.svg");
const thempic = require("../../../assets/them.svg");
const compic = require("../../../assets/com.svg");
const mempic = require("../../../assets/mem.svg");
//  const asas = require('../../../assets/asiii.svg')

// const infotheme = require('../../../assets/info.svg')
// const extracttheme = require('../../../assets/extrative.svg')
// const fiscaltheme = require('../../../assets/fiscal.svg')
// const engagetheme = require('../../../assets/engage.svg')
// const anticorrupttheme = require('../../../assets/anticorrupt.svg')
// const blog1 = require('../../../assets/blog1.png')
// const blog2 = require('../../../assets/blog2.png')
// const blog3 = require('../../../assets/blog3.png')

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drop: false,
      drop2: false,
      drop3: false,
      drop4: false,
      drop5: false,
      data: {},
      them: {},
      analytic: {},
    };
  }

  componentWillMount() {
    axios.get(`${customConfig.API_URL}/milestones/list`).then(
      (data) => {
        console.log("new analytic", data.data);
        this.setState({
          analytic: data.data,
        });
      },
      (error) => {
        console.log("new error", error);
        // this.setState({msg:data})
      }
    );

    axios.get(`${customConfig.API_URL}/news/list`).then(
      (data) => {
        console.log("new data", data.data);
        this.setState({
          data: data.data,
        });
      },
      (error) => {
        console.log("new error", error);
        // this.setState({msg:data})
      }
    );

    axios.get(`${customConfig.API_URL}/thematic-areas/commitments/list`).then(
      (data) => {
        console.log("Thermatic data", data.data);
        this.setState({
          them: data.data,
        });
      },
      (error) => {
        console.log("new error", error);
        // this.setState({msg:data})
      }
    );
  }

  eth(es) {
    let a = 0,
      b = 0,
      c = 0;
    if (es.data) {
      es.data.map((e) => {
        if (e.percentage_completion === 0) {
          c++;
        } else if (e.percentage_completion === 100) {
          b++;
        } else {
          a++;
        }
        return [a, b, c];
        // console.log('a',a ,'b', b,'c', c,'e', e.percentage_completion)
      });
      return {
        completed: (b * 100) / es.data.length,
        incomplete: (a * 100) / es.data.length,
        notStarted: (c * 100) / es.data.length,
      };
    }

    console.log("as", a, b, c, es);
  }

  getCom(e) {
    console.log("ews", e);
    let d = [];
    // e.forEach(b => {
    //     if(e.commitments.length) {
    //      d.concat(e.commitments)
    //     }
    // })
    return d;
  }
  roundup(val) {
    return Math.floor(val);
  }

  render() {
    const { data, them, analytic } = this.state;
    let blogs = data ? data.data : "",
      thematics = them ? them.data : "",
      // analytics = (analytic)?analytic.data:'';
      analytics = this.eth(analytic),
      //       d = analytics?analytics.forEach(e => {

      //   console.log('as',a , b, c, e.percentage_completion)
      // }):'';
      // console.log('as',d)

      //     let analyticArr =(analytics)?analytics

      // .map(e=> {

      //   return (

      //           <div className="px-md-5">
      //           <p className="c-mile-subhead">% COMPLETED</p>
      //                 <div className="status-container">
      //                     <span className="status" style={{width:e.percentage_completion+'%'}}></span>
      //                 </div>
      //           </div>
      //     )
      //   })
      //   :''

      blogArr = blogs
        ? blogs.map((e) => {
            return (
              <div className="col-md-4 p-4 m-0 no-overflow">
                <Link to={"/blog-details/" + e.id}>
                  <div
                    className="story-card p-0 m-0 img-blog"
                    style={{
                      maxHeight: "450px",
                      minHeight: "450px",
                    }}
                  >
                    <img
                      alt=""
                      className=""
                      src={e.banner}
                      width="95%"
                      height="440"
                      style={{
                        objectFit: "cover",
                      }}
                    />{" "}
                    <div className="shade"></div>{" "}
                    <div className="caption">
                      <p> {e.title} </p>{" "}
                    </div>{" "}
                    <div>
                      <p className="view-btn  py-2 mx-5 text-center">
                        {" "}
                        View Story{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </Link>{" "}
              </div>
            );
          })
        : "",
      ThemArr = thematics
        ? thematics.map((e, i) => {
            // let drop ='innerDrop'+i
            return (
              <Fade left>
                <Link to="/commitments">
                  {" "}
                  {/* <div className="card cardcol" onClick={() => { 
                                               this.setState({ drop}, ()=> {
                                                 console.log('this.stat', this.state.drop)
                                           })}}
                                           > */}{" "}
                  <div className="card cardcol pb-2">
                    <div className="row ">
                      <div className="col-8">
                        <p className="c-h4 capitalize"> {e.title} </p>{" "}
                        <p className="c-p"> {Parser(e.info)} </p>
                        <p className="c-card-a"> </p>
                      </div>{" "}
                      <div className="col-4">
                        {" "}
                        {/* <img alt='' width="100%" height="100" src={e.logo} className="mt-4" /> */}{" "}
                        <img
                          alt=""
                          width="100%"
                          // height = "100"
                          style={{
                            objectFit: "cover",
                          }}
                          src={e.logo}
                          className="mt-4"
                        />
                      </div>{" "}
                    </div>{" "}
                    {/* <div className="d-none">
                                                        { e.commitments.map(f=> {
                                                           return (
                                                              <Link to="/commitments/milestones">    
                                                              <div className="commitmentbox my-2">
                                                                  <p className="commitment">Improved Compliance Of Public Institutions With The Freedom Of Information Act (FOIA) With Respect To The Proactive Disclosure Provisions, Stipulating Mandatory Publication Requirements.</p>
                                                                  <ul className="nav mt-3">
                                                                      <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                                                                      <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                                                                  </ul>
                                                                  <p className="sb-commitment "></p>
                                                              </div>
                                                          </Link>
                                  
                                                           )
                                                         })}
                                                         </div> */}{" "}
                  </div>
                </Link>
              </Fade>
            );
          })
        : "",
      themArr2 = thematics
        ? thematics.map((e, i) => {
            // let drop ='innerDrop'+i
            return (
              <Fade left>
                <div className="col-md-6">
                  <Link to="/commitments">
                    <div className="card-mob pb-2">
                      <div className="row">
                        <div className="col-8">
                          <p className="c-h4 capitalize"> {e.title} </p>{" "}
                          <p className="c-p"> {Parser(e.info)} </p>
                          <p className="c-card-a"></p>
                        </div>
                        <div className="col-4">
                          <img alt="" src={e.logo} className="mt-4 fit-img" />
                        </div>{" "}
                      </div>{" "}
                      <div
                        className={
                          this.state.drop5 ? "commit-tab " : "c-closed"
                        }
                      >
                        <div className="commitmentbox my-2">
                          <p className="commitment">
                            {" "}
                            Work Together With All Stakeholders To Enhance
                            Transparency In The Extractive Sector Through A
                            Concrete Set Of Disclosures Related To Payments By
                            Companies And Receipts By Governments On All
                            Transactions Across The Sector’ s Value Chain.{" "}
                          </p>{" "}
                          <ul className="nav mt-3">
                            <li className="sb-commitment mr-5">
                              {" "}
                              <img alt="" className="mr-2" src={ico1} />8
                              milestones
                            </li>
                            <li className="sb-commitment">
                              {" "}
                              <img alt="" className="mr-2" src={ico2} />1 year
                              ago
                            </li>
                          </ul>{" "}
                          <p className="sb-commitment "> </p>{" "}
                        </div>

                        <div className="commitmentbox my-2">
                          <p className="commitment">
                            {" "}
                            Full Implementation Of Open Contracting And Adoption
                            Of Open Contracting Data Standards In The Public
                            Sector.{" "}
                          </p>{" "}
                          <ul className="nav mt-3">
                            <li className="sb-commitment mr-5">
                              {" "}
                              <img alt="" className="mr-2" src={ico1} />8
                              milestones
                            </li>
                            <li className="sb-commitment">
                              {" "}
                              <img alt="" className="mr-2" src={ico2} />1 year
                              ago
                            </li>
                          </ul>{" "}
                          <p className="sb-commitment "> </p>{" "}
                        </div>
                      </div>{" "}
                    </div>
                  </Link>
                </div>
              </Fade>
            );
          })
        : "";

    console.log("blogs", blogArr, ThemArr);
    // let comm = this.getCom(thematics);
    return (
      <div className="Home">
        <div className="Cover c-z-depth0">
          <div className="Header c-z-depth0">
            {/* <MNavbar /> */}
            <div
              className="jumbo-cap px-md-5"
              style={{
                marginTop: "12%",
              }}
            >
              {" "}
              {/* <p class=" ">Animation typewriter style using css steps()</p> */}{" "}
              <p className="line-1 c-h1 anim-typewriter d-none d-lg-block ">
                Openness and Transparency{" "}
              </p>{" "}
              <p className="move-up  c-h1  d-sm-block d-lg-none d-md-none ">
                Openness and Transparency{" "}
              </p>
              {/* <div class="col-md-5  offset-md-3 mt-md-5 d-none d-lg-block">
                                                                                                                
                                                                                                                  <div class="col-md-5 offset-md-3 mt-md-5 d-sm-block d-lg-none d-md-none  "> */}
              <p className="c-h3 mb-md-5 move-up">
                Working to ensure that Nigeria derives maximum <br /> benefit
                from openness and transparency needed for <br /> inclusive
                development and efficient service delivery.{" "}
              </p>{" "}
              <Link to="/register">
                <button className="btn btn-solid-primary-inv d-inline py-4 px-5  fifth">
                  {" "}
                  Get Involved{" "}
                </button>{" "}
              </Link>
              <Feedback />{" "}
              {/* <div className="btn-solid-primary-inv d-inline py-3 px-5 ">
                                                                                                                 
                                                                                                                </div> */}{" "}
            </div>{" "}
            <div
              style={{
                paddingTop: "20em",
              }}
            ></div>{" "}
          </div>{" "}
          <div className="cover-arrow bounce c-z-depth2"></div>{" "}
        </div>
        <div className="container c-z-depth1">
          <div className="row">
            <div className="offset-md-4 col-md-4 mt-md-5 pt-5">
              <p className="c-h2 py-4 "> Thematic Areas </p>
            </div>
          </div>

          {/* desktop web view */}

          {/* mobile tab view */}

          <div className="row mb-md-5 pb-md-5">
            {this.state.data.data === undefined ? (
              <div className="text-center d-block w-100 my-5">
                {" "}
                <img src={loader} alt="" width="150px" height="100px" />{" "}
              </div>
            ) : (
              themArr2
            )}
          </div>
        </div>{" "}
        <div className="mb-md-5 pb-md-5">
          <div className="stats-card p-md-5 my-md-5">
            <h3 className="pl-md-5">Milestones </h3>{" "}
            <div className="row">
              <div className="col-md-6">
                <div className="pl-md-5">
                  <p className="stats-txt pt-3"> Completed </p>{" "}
                  <div className="an-status-container">
                    {" "}
                    {console.log(
                      "lol",
                      analytics ? analytics.completed : ""
                    )}{" "}
                    <span
                      className="status-c float-left"
                      style={{
                        width: analytics ? analytics.completed - 10 + "%" : "",
                      }}
                    >
                      {" "}
                    </span>
                    <span
                      className="float-right mt-2"
                      style={{ marginRight: "-3.1em" }}
                    >
                      {analytics ? this.roundup(analytics.completed) + "%" : ""}
                    </span>
                  </div>{" "}
                </div>{" "}
                <div className="pl-md-5">
                  <p className="stats-txt pt-3"> Ongoing </p>{" "}
                  <div className="an-status-container">
                    <span
                      className="status-i"
                      style={{
                        width: analytics ? analytics.incomplete - 10 + "%" : "",
                      }}
                    >
                      {" "}
                    </span>
                    <span
                      className="float-right mt-2"
                      style={{ marginRight: "-3.1em" }}
                    >
                      {analytics
                        ? this.roundup(analytics.incomplete) + "%"
                        : ""}
                    </span>
                  </div>{" "}
                </div>{" "}
                <div className="pl-md-5">
                  <p className="stats-txt pt-3"> Not Started </p>{" "}
                  <div className="an-status-container">
                    <span
                      className="status-n"
                      style={{
                        width: analytics ? analytics.notStarted - 10 + "%" : "",
                      }}
                    >
                      {" "}
                    </span>
                    <span
                      className="float-right mt-2"
                      style={{ marginRight: "-3.1em" }}
                    >
                      {analytics
                        ? this.roundup(analytics.notStarted) + "%"
                        : ""}
                    </span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="offset-md-1 col-md-5">
                <Zoom>
                  <div className="row">
                    <div className="col-md-12">
                      <Link to="/commitments">
                        <img
                          src={thempic}
                          alt=""
                          width="90%"
                          className="my-1"
                        />
                      </Link>
                    </div>
                  </div>{" "}
                </Zoom>{" "}
                <Zoom>
                  <div className="row">
                    <div className="col-md-12">
                      <Link to="/about">
                        <img src={compic} alt="" width="90%" className="my-1" />
                      </Link>
                    </div>{" "}
                  </div>{" "}
                </Zoom>{" "}
                <Zoom>
                  <div className="row">
                    <div className="col-md-12">
                      <Link to="/commitments">
                        <img src={mempic} alt="" width="90%" className="my-1" />
                      </Link>
                    </div>{" "}
                  </div>{" "}
                </Zoom>{" "}
              </div>{" "}
            </div>
          </div>{" "}
        </div>
        <div className="Stories py-md-5">
          <div className="row">
            <div className="offset-md-4 col-md-4">
              <p className="c-h2 mt-md-5 white-txt"> Blog </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row px-md-5 mb-md-5">
            {" "}
            {this.state.data.data === undefined ? (
              <div className="text-center d-block w-100">
                {" "}
                <img src={loader} alt="" width="150px" height="100px" />{" "}
              </div>
            ) : (
              blogArr
            )}
            {/* <div className="col-md-4 p-4 m-0">
                                                                                                                                                                                                            <div className="story-card p-0 m-0">
                                                                                                                                                                                                              <img alt='' src={blog2} width="100%" />
                                                                                                                                                                                                              <div className="shade">
                                                                                                                                                                                
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                              <div className="caption">
                                                                                                                                                                                                                <p>
                                                                                                                                                                                                                OGP Nigeria: The Journey so far
                                                                                                                                                                                                                </p>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                              <div >
                                                                                                                                                                                                                <p className="view-btn  py-2 mx-5 text-center">View Story</p>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                          <div className="col-md-4 p-4 m-0">
                                                                                                                                                                                                            <div className="story-card p-0 m-0">
                                                                                                                                                                                                              <img alt='' src={blog3} width="100%" />
                                                                                                                                                                                                              <div className="shade">
                                                                                                                                                                                
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                              <div className="caption">
                                                                                                                                                                                                                <p>
                                                                                                                                                                                                                OGP TEAM meets with Government and Civil Society
                                                                                                                                                                                                                </p>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                              <div >
                                                                                                                                                                                                                <p className="view-btn  py-2 mx-5 text-center">View Story</p>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                          </div> */}{" "}
          </div>
        </div>
        {/* <MFooter /> */}
      </div>
    );
  }
}
