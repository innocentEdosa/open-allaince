
import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { customConfig } from '../../../helpers/index';
import axios from "axios";
import Parser from 'html-react-parser';

// const budgit = require('../../../assets/logonew.png')
// const code = require('../../../assets/code.png')
// const eie = require('../../../assets/eie.png')
// const omidyar = require('../../../assets/omidyar.png')
// const partners = require('../../../assets/partners.png')
// const one = require('../../../assets/one.png')
// const ppdc = require('../../../assets/ppdc.png')
// const wangonet = require('../../../assets/wangonet.png')
// const cislac = require('../../../assets/cislac.png')
// const nrgi = require('../../../assets/ngri.png')
// const cleen = require('../../../assets/cleen.png')


class MilestoneTab extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        this.fetchCommitmentFn(id);
    }


    fetchCommitmentFn(id) {
        axios.get(`${customConfig.API_URL}/commitment/${id}/milestones`)
            //   axios.get(customConfig.API_URL+'/commitment/'+id+'/milestones/')
            .then(res => {
                const milestones = res.data;
                this.setState({ milestones }, () => {
                    console.log('milestones', this.state.milestones)
                });
            })
    }


    render() {
        let milestoneArr = this.state.milestones ? this.state.milestones.data.map(e => {
            return (
                <div className="col-md-12 pb-md-5 border-bottom">
                    <p className="c-mile-head text-left my-md-4">
                        {e.title}
                    </p>
                    <div className="row">
                        <div className="col-md-3">
                            <p className="c-mile-subhead">CSO</p>
                            <img src={e.admin_uploaded_logo || e.cso_logo} width="50%" alt="" />
                        </div>
                        <div className="col-md-3">
                            <p className="c-mile-subhead">TARGET YEAR</p>
                            <p className="c-mile-head text-left">2018</p>

                        </div>
                        <div className="col-md-3">
                            <p className="c-mile-subhead">% COMPLETED</p>
                            <div className="status-container">
                                <span className="status" style={{ width: e.percentage_completion + '%' }}></span>
                            </div>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="c-mile-subhead my-md-3">UPDATES</p>
                        </div>
                        <div className="col-md-12">
                            <p>

                                {Parser(e.milestone_info)}
                            </p>
                            {/* <p className="c-mile-subhead">3 feburary 2018</p>
                    <p className="c-mile-aboutbody">First Year of the NAP: Completed for 2017 and 2018 (Public Consultative Sessions held in Abuja & Lagos) on the 27th and 28th July, 2017.</p> */}

                        </div>


                    </div>
                </div>
            )
        }) : '';
        return (
            <div className="container">
                <div className="row">
                    <div className="">
                        {milestoneArr}
                    </div>
                    {/* <div className="col-md-12 pb-md-5 border-bottom">
                <p className="c-mile-head text-left my-md-4">
                The Ministry of Budget and National Planning will hold two public fora to get citizens’ input into the pre-budget statements using the draft MTSS and MTEF document as tools/background documents in these forums
                </p>
                <div className="row">
                    <div className="col-md-3">
                        <p className="c-mile-subhead">CSO</p>
                        <img src={budgit} width="50%" alt="" />
                    </div>
                    <div className="col-md-3">
                        <p className="c-mile-subhead">TARGET YEAR</p>
                        <p className="c-mile-head text-left">2018</p>

                    </div>
                    <div className="col-md-3">
                        <p className="c-mile-subhead">% COMPLETED</p>

                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="c-mile-subhead my-md-3">UPDATES</p>
                    </div>
                    <div className="col-md-12">
                        <p className="c-mile-subhead">3 feburary 2018</p>
                        <p className="c-mile-aboutbody">First Year of the NAP: Completed for 2017 and 2018 (Public Consultative Sessions held in Abuja & Lagos) on the 27th and 28th July, 2017.</p>

                    </div>
                   
                   
                </div>
            </div> */}






                    {/* <div className="col-md-12 pb-md-5 border-bottom">
                <p className="c-mile-head text-left my-md-4">
                The Ministry of Budget and National Planning will hold two public fora to get citizens’ input into the pre-budget statements using the draft MTSS and MTEF document as tools/background documents in these forums
                </p>
                <div className="row">
                    <div className="col-md-3">
                        <p className="c-mile-subhead">CSO</p>
                        <img src={budgit} width="50%" alt="" />
                    </div>
                    <div className="col-md-3">
                        <p className="c-mile-subhead">TARGET YEAR</p>
                        <p className="c-mile-head text-left">2018</p>

                    </div>
                    <div className="col-md-3">
                        <p className="c-mile-subhead">% COMPLETED</p>

                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="c-mile-subhead my-md-3">UPDATES</p>
                    </div>
                    <div className="col-md-12">
                        <p className="c-mile-subhead">3 feburary 2018</p>
                        <p className="c-mile-aboutbody">First Year of the NAP: Completed for 2017 and 2018 (Public Consultative Sessions held in Abuja & Lagos) on the 27th and 28th July, 2017.</p>

                    </div>
                   
                   
                </div>
            </div> */}



                </div>
            </div>

        )
    }
}


export default withRouter(MilestoneTab)

