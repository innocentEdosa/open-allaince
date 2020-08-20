import React, { Component } from 'react'
import { Link } from "react-router-dom";
import MNavbar from '../../components/navbar';
import MFooter from '../../components/footer';
import axios from "axios";
import { customConfig } from '../../../helpers/index';

// import MAboutTab from '../../components/about-tab';
// import MMembersTab from '../../components/members-tab';
// import Commitments from './index';
// const filetype = require('../../../assets/pdftype.svg')
const ico1 = require('../../../assets/ico1.svg')
const ico2 = require('../../../assets/ico2.svg')
const loader = require('../../../assets/loader.gif')

// const membWhite = require('../../../assets/white-memb.svg')
// const blogpicthumb = require('../../../assets/picboard.png')


export default class Commitments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {}
        }
    }


    componentWillMount() {
        axios.get(`${customConfig.API_URL}/thematic-areas/commitments/list`)
            .then(

                data => {
                    console.log('new data', data.data)
                    this.setState({ data: data.data })



                },
                error => {
                    console.log('new error', error)
                    // this.setState({msg:data})


                }
            )
    }
    getMilestonesCount = (id) => {
        let count;
        axios.get(`${customConfig.API_URL}/commitment/${id}/milestones`)
            //   axios.get(customConfig.API_URL+'/commitment/'+id+'/milestones/')
            .then(res => {
                // const milestones = res.data;
                count = res.data

                // this.setState({ milestones },()=> {
                console.log('miles count', count.data)
                return count
                // return count ? count.data.length : '0 ';
                // } );
            })
        console.log('miles count', count)

    }

    render() {

        const { data } = this.state;
        let thematics = (data) ? data.data : ''
            , thematicsArr = (thematics) ? thematics
                .map(e => {
                    return (
                        <div>
                            <p className="c-com-h3 mb-4 pt-5">{e.title}</p>
                            {e.commitments.map(f => {
                                return (
                                    <Link to={"/commitments/milestones/" + f.id} key={f.id}>
                                        <div className="commitmentbox my-4 ">
                                            <p className="commitment">{f.title}</p>
                                            <ul className="nav mt-3">
                                                <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} /> View milestones</li>
                                                <li className="sb-commitment"><img alt="" className="mr-2" src={ico2} />1 year ago</li>
                                            </ul>
                                            <p className="sb-commitment "></p>
                                        </div>
                                    </Link>
                                )

                            })}
                        </div>
                    )
                })
                : '';
        console.log('blogs', thematicsArr)


        return (
            <div className="no-spaces-x">
                <MNavbar />
                <div className="  container my-md-5 py-5 no-spaces-x">
                    {(this.state.data.data === undefined) ? <div className="text-center d-block w-100"><img src={loader} alt="" width="150px" height="100px" /></div> : thematicsArr}

                    {/* <div className="commitmentbox my-2">
                <p className="commitment">Improved Compliance Of Public Institutions With The Freedom Of Information Act (FOIA) With Respect To The Proactive Disclosure Provisions, Stipulating Mandatory Publication Requirements.</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div>
            <p className="c-com-h3 my-4">Fiscal Transparency</p>
            <div className="commitmentbox my-2">
                <p className="commitment">To Improve The Ease Of Doing Business And Nigeria’s Ranking On The World Bank Doing Business Index.</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div>
            <div className="commitmentbox my-2">
                <p className="commitment">Adoption Of Common Reporting Standards And The Addis Tax Initiative Aimed At Improving The Fairness, Transparency, Efficiency And Effectiveness Of The Tax System.</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div>
            <div className="commitmentbox my-2">
                <p className="commitment">Work Together With All Stakeholders To Enhance Transparency In The Extractive Sector Through A Concrete Set Of Disclosures Related To Payments By Companies And Receipts By Governments On All Transactions Across The Sector’s Value Chain.</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div>
            <div className="commitmentbox my-2">
                <p className="commitment">Full Implementation Of Open Contracting And Adoption Of Open Contracting Data Standards In The Public Sector.</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div>
            <div className="commitmentbox my-2">
                <p className="commitment">To Ensure More Effective Citizens’ Participation Across The Entire Budget Cycle.</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div>
            <p className="c-com-h3 my-4">Anti-corruption</p>
            <div className="commitmentbox my-2">
                <p className="commitment">Commit To Taking Appropriate Actions To Co-ordinate Anti-corruption Activities; Improve Integrity, Transparency And Accountability</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div>
            <div className="commitmentbox my-2">
                <p className="commitment">To Strengthen Nigeria’s Asset Recovery Legislation Including Non-conviction Based Confiscation Powers And The Introduction Of Unexplained Wealth Orders.</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div>
            <div className="commitmentbox my-2">
                <p className="commitment">To Establish A Platform For Sharing Information Among Law Enforcement Agencies (LEAs), Anti-Corruption Agencies (ACAs), National Security Adviser (NSA) And Financial Sector Regulators To Detect, Prevent And Disrupt Corrupt Practices.</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div>
            <div className="commitmentbox my-2">
                <p className="commitment">To Establish A Public Central Register Of Beneficial Owners Of Companies.</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div>
            <p className="c-com-h3 my-4">Citizen Engagement</p>
            <div className="commitmentbox my-2">
                <p className="commitment">Adopt A Technology-based Citizens’ Feedback On Projects And Programs Across Transparency And Accountability.</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div>
            <div className="commitmentbox my-2">
                <p className="commitment">Government-civil Society To Jointly Review Existing, Legislations On Transparency And Accountability Issues And Make Recommendations To The National Assembly.</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div>
            <div className="commitmentbox my-2">
                <p className="commitment">Develop A Permanent Dialogue Mechanism On Transparency, Accountability And Good Governance Between Citizens And Government To Facilitate A Culture Of Openness.</p>
                <ul className="nav mt-3">
                    <li className="sb-commitment mr-5"><img alt="" className="mr-2" src={ico1} />8 milestones</li>
                    <li className="sb-commitment"><img alt="" className="mr-2"  src={ico2} />1 year ago</li>
                </ul>
                <p className="sb-commitment "></p>
            </div> */}
                </div>
                <div className="grey-color">

                    <MFooter />
                </div>
            </div>
        )
    }
}
