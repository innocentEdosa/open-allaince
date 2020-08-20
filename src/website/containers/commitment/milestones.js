import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MNavbar from "../../components/navbar";
import MFooter from "../../components/footer";
import AboutMilestone from "./about-milestone";
import MilestoneTab from "./milestones-tab";
import axios from "axios";
import { customConfig } from "../../../helpers/index";
import Parser from "html-react-parser";
import { Collapse } from "reactstrap";

// import * as Scroll from 'react-scroll';
import {
  // Link,
  //  Element ,
  Events,
  animateScroll as scroll,
  scrollSpy,
  //   scroller
} from "react-scroll";

// const budgit = require('../../../assets/logonew.png')
// const code = require('../../../assets/code.png')

class Milestones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      milestones: false,
      collapse: false,
      them: "",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state) => ({ collapse: !state.collapse }));
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.fetchCommitmentFn(id);
  }

  fetchCommitmentFn(id) {
    axios.get(`${customConfig.API_URL}/commitment/` + id).then((res) => {
      const commitment = res.data;
      this.setState({ commitment }, () => {
        console.log("them", this.state.commitment);
      });
    });
  }
  fetchThem(id) {
    axios.get(`${customConfig.API_URL}/thematic-areas/commitments/list`).then(
      (data) => {
        let them = data.data.data.filter((e) => e.id === id);

        console.log("new data thems", them);
        return them;
        //   this.setState({them})
      },
      (error) => {
        console.log("new error", error);
        // this.setState({msg:data})
      }
    );
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    //   const
    return (
      <div>
        <MNavbar />
        <div className="  container my-md-5 py-5 px-md-5">
          <div className="row">
            <div className="col-md-12">
              <p className="c-comdeets-h2">
                {this.state.commitment ? this.state.commitment.data.title : ""}
              </p>
            </div>
          </div>
          <div className="row my-md-5 ">
            <div className="col-md-8">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div
                    className={
                      !this.state.milestones
                        ? "cardhead-tab-active pt-4 pb-3"
                        : "cardhead-tab pt-4 pb-3"
                    }
                    onClick={() => {
                      this.setState({ milestones: false });
                    }}
                  >
                    <p className="text-center c-mile-head">About</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className={
                      this.state.milestones
                        ? "cardhead-tab-active pt-4 pb-3"
                        : "cardhead-tab pt-4 pb-3"
                    }
                    onClick={() => {
                      this.setState({ milestones: true });
                    }}
                  >
                    <p className="text-center c-mile-head">Milestones</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="c-card3 topborder-straight">
                    {!this.state.milestones ? (
                      <AboutMilestone
                        about={
                          this.state.commitment ? this.state.commitment : ""
                        }
                        stateProps={this.state.milestones}
                      />
                    ) : (
                      <MilestoneTab />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sticky-side">
                <div className="row">
                  <div className="col-12">
                    <div className="c-card3">
                      <p className="c-mile-h4">Thematic Area</p>
                      <p className="c-mile-h3">
                        {this.state.commitment
                          ? this.fetchThem(
                              this.state.commitment.data.thematic_area_id
                            )
                          : ""}{" "}
                      </p>

                      <p className="c-mile-h4">Lead MDA</p>
                      <ul className="com-list1">
                        <li className="c-mile-li">
                          {this.state.commitment
                            ? this.state.commitment.data.lead_mda
                            : ""}
                        </li>
                        {/* <li className="c-mile-li">National Planning</li> */}
                      </ul>

                      <p className="c-mile-h4">Responsible Person</p>
                      <ul>
                        <li className="c-mile-li">
                          {this.state.commitment
                            ? this.state.commitment.data.responsible_person
                            : ""}
                        </li>
                      </ul>

                      <p
                        className="c-mile-h4 underline p-2 collapse-imp"
                        onClick={this.toggle}
                      >
                        {" "}
                        View Implementation Partners ->
                      </p>
                      <Collapse isOpen={this.state.collapse}>
                        <div
                          style={{
                            backgroundColor: "rgba(123, 233, 145, 0.04)",
                            paddingBottom: "1em",
                            marginBottom: "2em",
                            borderBottom: "3px solid rgba(43, 193, 105, 1)",
                          }}
                        >
                          {Parser(
                            this.state.commitment
                              ? this.state.commitment.data
                                  .implementation_partners
                              : ""
                          )}
                        </div>
                      </Collapse>

                      {/* <ul>
                        <li className="c-mile-li">Federal Ministry of Finance</li>
                        <li className="c-mile-li">Federal Ministry of Information</li>
                        <li className="c-mile-li">Budget Office of the Federation</li>
                        <li className="c-mile-li">Office of the Accountant-General of the Federation</li>
                        <li className="c-mile-li">Office of the Auditor-General of the Federation</li>
                        <li className="c-mile-li">Fiscal Responsibility Commission </li>
                        <li className="c-mile-li">National Assembly </li>
                        <li className="c-mile-li"> Central Bank of Nigeria </li>
                        <li className="c-mile-li"> National Orientation Agency </li>
                    </ul> */}

                      <p className="c-mile-h4">Dates</p>
                      <ul>
                        <li className="c-mile-li"> January 2017 - June 2019</li>
                      </ul>
                      <p className="c-mile-h4">Funding Source</p>
                      <ul>
                        <li className="c-mile-li">
                          {" "}
                          {this.state.commitment
                            ? this.state.commitment.data.funding_source
                            : ""}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <p className="c-mile-h3-bold mt-5 mb-3">Participating CSOs</p> */}
                {/* <div className="row">
                    <div className="col-6">
                        <div className="c-card4">
                            <img src={budgit} width="100%" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="c-card4">
                            <img src={code} width="100%" alt=""/>

                        </div>
                    </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div onClick={this.scrollToTop} className="card3 circle-btn">
          ^
        </div>

        <MFooter />
      </div>
    );
  }
}

export default withRouter(Milestones);
