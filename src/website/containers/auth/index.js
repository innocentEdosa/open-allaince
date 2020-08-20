import React, { Component } from 'react'
import MNavbar from '../../components/navbar';
// import MFooter from '../../components/footer';
import { customConfig } from '../../../helpers/index';
import axios from 'axios';
import { UncontrolledAlert } from 'reactstrap';

// const budgit = require('../../../assets/logonew.png')
// const code = require('../../../assets/code.png')
// const eie = require('../../../assets/eie.png')
// const cislac = require('../../../assets/cislac.png')
const back = require('../../../assets/backbtn.svg')
const upload = require('../../../assets/upload.svg')
// const add = require('../../../assets/addmem.svg')
const btnloader = require('../../../assets/btnloader.svg')


// const nrgi = require('../../../assets/ngri.png')
// const omidyar = require('../../../assets/omidyar.png')
// const partners = require('../../../assets/partners.png')
// const one = require('../../../assets/one.png')
// const ppdc = require('../../../assets/ppdc.png')
// const wangonet = require('../../../assets/wangonet.png')

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      steptwo: false,
      success: false,
      submitted: false,
      msg: "",
      loading: false,

      company_name: '',
      company_brief: '',
      email: ''

    }
  }




  ted() {
    document.querySelector("html").classList.add('js');

    var fileInput = document.querySelector(".input-file"),
      button = document.querySelector(".input-file-trigger"),
      the_return = document.querySelector(".file-return");

    button.addEventListener("keydown", function (event) {
      if (event.keyCode === 13 || event.keyCode === 32) {
        fileInput.focus();
      }
    });
    button.addEventListener("click", function (event) {
      fileInput.focus();
      return false;
    });
    fileInput.addEventListener("change", function (event) {
      the_return.innerHTML = this.value;
    });
  }


  exa = e => {
    console.log('input e', e.target.files)
  }
  submitForm = (e) => {
    e.preventDefault();

    this.setState({ loading: true })

    const formData = new FormData();
    formData.append('name', this.refs.company_name.value)
    formData.append('email', this.refs.company_email.value)
    formData.append('company_brief', this.refs.company_description.value)
    formData.append('logo', this.state.file)






    if (this.state.file) {
      // const ad = {
      //   name: this.refs.company_name.value,
      //   email: this.refs.company_email.value,
      //   company_brief: this.refs.company_description.value,
      //   // logo: this.state.file,
      // };

      axios.post(`${customConfig.API_URL}/member-application`, formData)
        .then(

          data => {
            console.log('new data', data)
            if (data.data.success) {
              console.log('new data', data.data)

              this.setState({ submitted: true })
              this.setState({ success: true })
              this.setState({ msg: data.data.message })
              this.setState({ loading: false })
            } else {

              console.log('new error', data)
              this.setState({ submitted: true })
              this.setState({ success: false })
              this.setState({ msg: Object.values(data.data.errors).join(', ') })
              this.setState({ loading: false })
            }



          },
          error => {
            console.log('new error', error)
            this.setState({ submitted: true })
            this.setState({ success: false })
            this.setState({ loading: false })
            // this.setState({msg:data})


          }
        )



      //   axios.post(`${customConfig.API_URL}/member-application`, {ad})
      // .then(res => {
      //   console.log(res);
      //   console.log(res.data);
      // })

      // console.log('new stuff:', customConfig.API_URL, ad)
    }
  }

  render() {
    const { loading } = this.state;
    return (

      <div className="auxbg">
        <MNavbar />
        {this.state.submitted && <div className="toaster"><UncontrolledAlert color={(this.state.success) ? "success" : "danger"} fade={true}>
          <h4 className="alert-heading">{(this.state.success) ? this.state.msg : 'Oops we encountered some issues'}</h4>
          <p>
            {(this.state.success) ? 'Thanks for joining us We can’t wait to see what u bring to the table' : this.state.msg}
          </p>
          <hr />
          <p className="mb-0">
            {(this.state.success) ? 'For authenticity purpose, we need to further verify your account. A link will be sent to your email once verified' : ''}
          </p>
        </UncontrolledAlert></div>}
        <div className="container my-md-5 py-5">
          <div className="row row-reverse">


            <div className="col-md-5">






              {/* desktop view */}
              <div className="twoformcont d-none d-lg-block">
                <form action="#" onSubmit={this.submitForm}>
                  <div className={(this.state.steptwo) ? "twoform transright" : "twoform transleft"}>

                    <div className="twoformdetail py-3 py-2 float-left">
                      <div className="c-card3 pb-5 ">
                        <div className="border-bottom my-5">
                          <p className="c-mile-h3">Hello</p>
                          <p className="loginsub">Excited!! you’re here please fill the form below</p>
                        </div>
                        <div className="form">
                          <p className="label">CSO's Name</p>
                          <input className="form-control py-4 mb-4" required ref="company_name" value={this.state.company_name} onChange={(e) => { this.setState({ company_name: e.target.value }) }} placeholder="e.g. Budgit" type="text" />
                          <p className="loginsub">Company Email Address</p>
                          <input className="form-control py-4 mb-5 " required ref="company_email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="e.g. ayomide@budgit.com" type="email" />
                          <div className="btn-solid-primary py-3 text-center" onClick={() => { this.setState({ steptwo: !this.state.steptwo }) }}>
                            Next
                    </div>
                        </div>
                      </div>
                    </div>




                    <div className="twoformdetail py-3 py-2 float-right">
                      <div className="c-card3 pb-5">
                        <div className="border-bottom mb-5">
                          <div>
                            <img src={back} alt='' onClick={() => { this.setState({ steptwo: !this.state.steptwo }) }} style={{ cursor: "pointer" }} />
                          </div>
                          <p className="c-mile-h3 mt-5">You're almost done</p>
                          <p className="loginsub">Step 2</p>
                        </div>
                        <div className="form">
                          <p className="label">Brief Description</p>
                          <textarea required className="form-control py-4 mb-4" value={this.state.company_brief} onChange={(e) => { this.setState({ company_brief: e.target.value }) }} ref="company_description" placeholder="e.g. Budgit"></textarea>


                          <div className="input-file-container">
                            <input required className="input-file uploadbtn pt-2" ref="company_file" id="my-file-MOB" onChange={(e) => {
                              this.setState({ file: e.target.files[0] })
                            }} type="file" />
                            <label tabIndex="0" htmlFor="my-fileMOB" className="input-file-trigger smltxt" >Upload a Logo...
                      <img src={upload} className="pl-3 " alt='' />

                            </label>
                          </div>
                          <p className="file-return"></p>

                          {/* <input className="py-4 mb-5 " placeholder="e.g. ayomide@budgit.com" type="file" /> */}
                          {/* <div className="btn-solid-primary py-3 text-center" onClick={this.submitForm}>
                      Join
                    </div> */}
                          <button type="submit" className="btn-solid-primary py-3 text-center w-100"> Join {loading && <img alt="" src={btnloader} width="20" style={{}} />}</button>

                        </div>
                      </div>
                    </div>












                  </div>
                </form>
              </div>


              {/* moblie view */}
              <div className="row d-sm-block d-lg-none d-md-none">
                <div className="col-md-12">
                  <form action="#" onSubmit={this.submitForm}>

                    <div className=" py-3 py-2 float-left">
                      <div className="c-card3 pb-5 ">
                        <div className="border-bottom my-5">
                          <p className="c-mile-h3">Hello</p>
                          <p className="loginsub">We are excited you're here, Please fill the form below</p>
                        </div>
                        <div className="form">
                          <p className="label">CSO's Name</p>
                          <input className="form-control py-4 mb-4" required ref="company_name" value={this.state.company_name} onChange={(e) => { this.setState({ company_name: e.target.value }) }} placeholder="e.g. Budgit" type="text" />
                          <p className="loginsub">Company Email Address</p>
                          <input className="form-control py-4 mb-5 " required ref="company_email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="e.g. ayomide@budgit.com" type="email" />
                          <p className="label">Brief Description</p>
                          <textarea required className="form-control py-4 mb-4" ref="company_description" value={this.state.company_brief} onChange={(e) => { this.setState({ company_brief: e.target.value }) }} placeholder="e.g. Budgit"></textarea>


                          <div className="input-file-container">
                            <input required className="input-file uploadbtn pt-2" ref="company_file" id="my-file" onChange={(e) => {
                              this.setState({ file: e.target.files[0] })
                            }} type="file" />
                            <label tabIndex="0" htmlFor="my-file" className="input-file-trigger smltxt" >Upload a Logo...
                      <img src={upload} className="pl-3 " alt='' />

                            </label>
                          </div>
                          <p className="file-return"></p>

                          {/* <input className="py-4 mb-5 " placeholder="e.g. ayomide@budgit.com" type="file" /> */}
                          {/* <div className="btn-solid-primary py-3 text-center" onClick={this.submitForm}>
                      Join
                    </div> */}
                          <button type="submit" className="btn-solid-primary py-3 text-center w-100"> Join {loading && <img alt="" src={btnloader} width="20" style={{}} />}</button>

                        </div>
                      </div>
                    </div>












                  </form>
                </div>
              </div>
































            </div>



            <div className="col-md-6 offset-md-1">
              {/* <ul className="nav">
                <li>
                  <img alt='' src={add} width="100%" height="100%" className="pr-md-4" />
                </li>
                <li>
                  <div className="card-circle">
                    <img alt='' src={budgit} width="100%" height="50%" className="p-2 mt-4" />
                  </div>

                </li>
                <li>
                  <div className="card-circle">
                    <img alt='' src={cislac} width="100%" height="70%" className="p-1 mt-2" />
                  </div>
                </li>

                <li>
                  <div className="card-circle">
                    <img alt='' src={code} width="100%" height="50%" className="p-2 mt-4" />
                  </div>
                </li>
                <li>
                  <div className="card-circle">
                    <img alt='' src={eie} width="100%" height="70%" className="p-1 mt-2" />
                  </div>
                </li>
              </ul> */}
            </div>
          </div>

        </div>
        {/* <MFooter /> */}



      </div>

    )
  }
}
























