
import React, { Component } from 'react'


const abt = require('../../../assets/abtpic.png')
const abt1 = require('../../../assets/abtpic1.png')
const abt2 = require('../../../assets/abtpic2.png')


export default class MAboutTab extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <p className="c-ab-h2 text-center mt-md-3">
              Open Alliance is a group of civil society organisations seeking to
              promote good governance in Nigeria
            </p>
            <p className="c-ab-h4 text-center">
              They ensure that Nigeria derives its maximum benefit from openness
              and transparency needed for inclusive development and efficient
              service delivery
            </p>
          </div>
        </div>
        <div className="container  mt-md-5 pt-5">
          <div className="row">
            <div className="col-md-6">
              <p className="c-ab-h3"> Our Mission</p>
              <p className="c-ab-h4">
                This platform allows CSOs report and document their roles in the
                implementation of the Open Government Partnership [OGP] Process.
                Nigeria’s first National Action Plan was co-created by the
                Government, Civil Society Organisations and Private Sector
                stakeholders in October 2016, during a National Retreat that
                held in Kaduna.{" "}
              </p>

              <p className="c-ab-h4">
                {" "}
                This national retreat produced a draft National Action Plan
                which was then made available to the public for comments and
                feedback, focus group discussions and also to senior government
                officials, including the Economic Management Team chaired by the
                Vice President.{" "}
              </p>
              <p className="c-ab-h4">
                {" "}
                The National Action Plan spans into four key thematic areas of
                Fiscal Transparency, Anti-Corruption, Access to Information, and
                Citizen Engagement.
              </p>
              <p className="c-ab-h4">
                The commitments are concrete, ambitious and implementable. Some
                of the key deliverables are: Open budgeting, Open contracting,
                Revenue transparency, Publication of a register of beneficial
                ownership especially in the extractive industry among others,
                Improvement in the ease of doing business index, Anti-corruption
                and asset recovery, Improvement in the use and implementation of
                the Freedom of Information Act, Citizen engagement and
                empowerment, etc.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <img alt="" src={abt} width="100%" />
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12">
                      <img alt="" src={abt2} width="100%" />
                    </div>
                    <div className="col-md-12 mt-md-4">
                      <img alt="" src={abt1} width="70%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}






