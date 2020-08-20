
import React, { Component } from 'react'
import Parser from 'html-react-parser';
import { withRouter } from "react-router-dom";
import axios from "axios";
import { customConfig } from '../../../helpers/index';


class AboutMilestone extends Component {

    constructor(props) {
        super(props);

        this.state = {
            commitment: ''

        };
    }
    componentWillMount() {
        const { id } = this.props.match.params;
        this.fetchCommitmentFn(id);
    }

    fetchCommitmentFn(id) {
        axios.get(`${customConfig.API_URL}/commitment/` + id)
            .then(res => {
                const commitment = res.data;
                this.setState({ commitment }, () => {
                    console.log('them', this.state.commitment)
                });
            })
    }

    render() {
        let nCommitment = this.state.commitment ? this.state.commitment : '';

        let rawMarkup = nCommitment ? nCommitment.data : '', rawData = rawMarkup ? rawMarkup.about : '';
        console.log('milos', rawData)
        // let mc = nCommitment 



        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-md-4">
                        {Parser(rawData)}
                        {/* <p className="c-mile-abouthead">
                General problem/challenge addressed by the commitment
                </p>
                <p className="c-mile-aboutbody">
                There is inadequate citizens’ engagement and participation in the budget preparation, approval, implementation and monitoring process. This results in citizens not having information and thus not being able to relate with the projects in the budget and ultimately weakens accountability for resource allocations
                </p> */}
                    </div>
                    {/* <div className="col-md-12 mt-md-4">
                <p className="c-mile-abouthead">
                Main Objective
                </p>
                <p className="c-mile-aboutbody">
                To ensure that budget planning, approval, implementation, monitoring and reporting meet the needs of citizens and that citizens have open access to budget information in a format that is both human and machine readable
                </p>
            </div>
            <div className="col-md-12 mt-md-4">
                <p className="c-mile-abouthead">
                Specific OGP challenge addressed by commitment
                </p>
                <p className="c-mile-aboutbody">
                More robust citizens’ participation in the budget cycle will result in more effective management of public resources and improved public services and contribute to learning for improved budget performance
                </p>
            </div>
            <div className="col-md-12 mt-md-4">
                <p className="c-mile-abouthead">
                Rationale for commitment
                </p>
                <p className="c-mile-aboutbody">
                By making budget information available and accessible to all citizens in a timely manner and usable format, this commitment improves accountability on the part of Government, provides openness and transparency in the budget process and ensures that citizens are engaged throughout the budget cycle
                </p>
            </div> */}
                    {/* <div className="col-md-12 mt-md-4">
                <p className="c-mile-abouthead">
                Expected Outcome/impact
                </p>
               <ul>
                   <li className="c-mile-aboutbody">Improved management of public resources to provide essential services</li>
                   <li className="c-mile-aboutbody">Increased citizens’ participation in budget processes</li>
                   <li className="c-mile-aboutbody">Improved governance, transparency and accountability </li>
                   
               </ul>
            </div> */}
                    {/* <div className="col-md-12 mt-md-4">
                <p className="c-mile-abouthead">
                Performance Indicators
                </p>
               <ul>
                   <li className="c-mile-aboutbody">Changes in the level of citizens’ satisfaction </li>
                   <li className="c-mile-aboutbody">Number of public consultations in the budget process</li>
                   <li className="c-mile-aboutbody">Timely and publicly available audit reports</li>
                   <li className="c-mile-aboutbody">Timely publication of the quarterly budget implementation reports in accordance with the Fiscal Responsibility Act </li>
                   <li className="c-mile-aboutbody">Number of public hearings organized by the National Assembly on budget and audit reports </li>
                   <li className="c-mile-aboutbody">Comprehensive Needs Assessment Reports accompanying MDA budget proposals annually </li>
                   <li className="c-mile-aboutbody">Number of CSOs and citizens participating in the budget hearings organized by National Assembly Committees of 3 – 5 priority sectors of government </li>
                   <li className="c-mile-aboutbody">The number of community-based projects that are uploaded on the technology-based feedback platform per budget cycle </li>
               </ul>
            </div> */}
                </div>
            </div>

        )
    }
}


export default withRouter(AboutMilestone)




