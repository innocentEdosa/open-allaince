
import React, { Component } from 'react'
import axios from "axios";
import { customConfig } from '../../../helpers/index';

const budgit = require('../../../assets/logonew.png')
const code = require('../../../assets/code.png')
const eie = require('../../../assets/eie.png')
const omidyar = require('../../../assets/omidyar.png')
const partners = require('../../../assets/partners.png')
const one = require('../../../assets/one.png')
const ppdc = require('../../../assets/ppdc.png')
const wangonet = require('../../../assets/wangonet.png')
const cislac = require('../../../assets/cislac.png')
const nrgi = require('../../../assets/ngri.png')
const cleen = require('../../../assets/cleen.png')


export default class MMembersTab extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }


    componentWillMount() {
        axios.get(`${customConfig.API_URL}/members/list`)
            .then(res => {
                const thematics = res.data;
                this.setState({ thematics }, () => {
                    console.log('them', this.state.thematics)
                });
            })
    }

    render() {
        return (
            <div className="container my-md-5 py-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card card-member">
                            <img alt='logo' src={budgit} width="100%" height="65%" className="fit-img" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-member">
                            <img alt='logo' src={cislac} width="100%" height="65%" className="fit-img" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-member">
                            <img alt='logo' src={cleen} width="100%" height="65%" className="fit-img" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-member">
                            <img alt='logo' src={code} width="100%" height="65%" className="fit-img" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-member">
                            <img alt='logo' src={eie} width="100%" height="65%" className="fit-img" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-member">
                            <img alt='logo' src={nrgi} width="100%" height="65%" className="fit-img" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-member">
                            <img alt='logo' src={omidyar} width="100%" height="65%" className="fit-img" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-member">
                            <img alt='logo' src={one} width="100%" height="65%" className="fit-img" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-member">
                            <img alt='logo' src={partners} width="100%" height="65%" className="fit-img" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-member">
                            <img alt='logo' src={ppdc} width="100%" height="65%" className="fit-img" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-member">
                            <img alt='logo' src={wangonet} width="100%" height="65%" className="fit-img" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-member">
                            <a target="_blank" rel="noopener noreferrer" href="https://res.cloudinary.com/domee-u/image/upload/v1558956068/budgit/Open_Alliance_Membership_Form_1_-_Form_Responses_1_k1mbtq.pdf">See Full Member list</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}






