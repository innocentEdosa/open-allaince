import React, { Component } from 'react'
//import { Link } from "react-router-dom";
import MNavbar from '../../components/navbar';
import MFooter from '../../components/footer';
//import MAboutTab from '../../components/about-tab';
//import MMembersTab from '../../components/members-tab';
//const aboutActive = require('../../../assets/blue-about.svg')
//const aboutWhite = require('../../../assets/white-about.svg')
const picdetail1 = require('../../../assets/picdetail1.png')
const picdetail2 = require('../../../assets/picdetail2.png')
const picboard = require('../../../assets/picoo.png')
const arrowdwn = require('../../../assets/arrow2.svg')


export default class BlogDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {

      }
    }
    
  render() {
    return (
      <div>
        <MNavbar />
        <div className="main-blogpic" style={{height:"400px", overflow:"hidden"}}>
            <img src={picboard} alt='' width="100%" style={{marginTop:"-6em"}} />
            <div className="absol">
                <p className="c-blog-details-h4 text-center">2nd National Steering Committee and Working Group meeting</p>
                <div className="text-center">
                    <span className="text-center "><img alt='' src={arrowdwn}  /></span>
                </div>
            </div>
        </div>
        <div className="container mb-md-5 pb-5">
            <div className="row">
                <div className="offset-md-1 col-md-10">
                  <p className="c-blogdetails-h6 my-md-5">On November 30, 2017</p>
                  <p className="c-blogdetails-h5">The National Secretariat convened the 2nd National Steering Committee meeting on November 27, 2017. The meeting was scheduled to begin at 9 am but started late due to the late arrival of guests. At about 10 am, the meeting started with an introduction of the OGP national steering committee members. Following the brief introduction of members, the Special Assistant to the President on Justice reform, Mrs Juliet Ibekaku gave a welcome remark. The NSC Incoming Co-Chairs, representative of Media Rights Agenda, Segun Fatause, and representative of National Economic Summit Group (NESG), Dr Tayo Aduloju also delivered their welcome remarks.</p>
                    <img alt='' src={picdetail1} width="100%" className="my-md-5 px-md-5" style={{boxSizing:"border-box", paddingLeft:"4em", paddingRight:"4em"}} />
                  <p className="c-blogdetails-h5">Representing Mr Edet Ojo at the meeting, Segun Fatause delivered a progress report from CSOs to the participants. In his note, he noted that there is more to do on OGP and there should be increasing participation and partnership between the government and the civil society to achieve</p>
                  <p className="c-blogdetails-h5">considerable progress in the implementation of the National Action Plan.Adding to the message, the Honourable Minister of Justice, and Attorney General of the Federation, Abubakar Malami (SAN) delivered the progress report from the government side on the implementation of the OGP. Shortly after the Minister’s speech, an update on the implementation of the decisions taken at the 1st NSC meeting that held on March 14, 2017, was provided by the OGP Secretariat.</p>
                    <img alt='' src={picdetail2} width="100%" className="my-md-5" style={{boxSizing:"border-box", paddingLeft:"4em", paddingRight:"4em"}} />
                  <p className="c-blogdetails-h5">1. Application from non-state actors for the membership of the NSC: Two organisations made presentations on why their organisations should be considered for a position on the NSC. The two organisations are Institue of Chartered Secretaries and Administrators of Nigeria, and Procurement Professionals Association of Nigeria (PPAN). After the delivery, there were issues raised by members of the steering committee. CSOs present noted that they were not aware of the decision to bring one more non-state actor on board and that it was against the partnership that should be between government and the civil society. Mrs Juliet Ibekaku responded to the claim and stated that the development was agreed upon at the 1st NSC meeting which Mr Edet Ojo was present and agreed to. She emphasised the need to add one more non-state actor to the current 41-member list to balance both sides. Following a vote called, PPAN was voted into the NSC.</p>
                  <p className="c-blogdetails-h5">The next session witnessed the update on the status of the 2017 work plan and presentation of the draft 2018 work plan for approval by working groups. In this session, the co-chairs of four working groups (Fiscal Transparency, Anti-Corruption, Access to Information, Citizens Engagement) made the short presentation on their thematic areas. Development partners present the meeting delivered brief remarks and their thoughts on the OGP Nigeria. Gracing the occasion was the US Ambassador to Nigeria, W. Stuart Symington who re-emphasised the US commitment on Anti-Corruption and Transparency which the OGP sets out to achieve. The Executive Director of ANEEJ, Reverend David Ugolor gave the closing remarks and the meeting ended with lunch after.</p>
                </div>
            </div>
        </div>
        <MFooter />
      </div>
    )
  }
}

