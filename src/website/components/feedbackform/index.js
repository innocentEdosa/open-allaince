import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from "axios";
import { customConfig } from '../../../helpers/index';
import { UncontrolledAlert } from 'reactstrap';

export default class Feedback extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            message: "",
            submitted: false,
            modal: false
        }
        this.toggle = this.toggle.bind(this);

    }

    submitFeedback = () => {
        // e.preventDefault();
        this.toggle();

        let { name, email, message } = this.state;

        this.setState({ loading: true })
        console.log('form', name)

        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('message', message)

        if (formData) {
            console.log('form', formData)
            axios.post(`${customConfig.API_URL}/feedback`, formData)
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
        }
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    render() {

        return (
            <div className="c-z-depth2">
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
                <button className="btn-solid-primary feedback-btn" color="danger" onClick={this.toggle}>Feedback</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}><p className="c-mile-h3">Send Us a message</p></ModalHeader>
                    <ModalBody>
                        <div className="pb-5 ">
                            <div className="form">
                                <p className="label">Name</p>
                                <input className="form-control py-4  mb-4" required value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} placeholder="e.g. Tobi Obi" type="text" />
                                <p className="loginsub">Email Address</p>
                                <input className="form-control py-4 mb-5 " required value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="e.g. ayomide@mail.com" type="email" />
                                <p className="loginsub">Message</p>
                                <textarea className="form-control py-4 mb-5 " required value={this.state.message} onChange={(e) => { this.setState({ message: e.target.value }) }} placeholder="Type response here"></textarea>
                                <div className="btn-solid-primary py-3 text-center" onClick={() => { this.setState({ submitted: true }, this.submitFeedback) }}>
                                    Send
                    </div>
                            </div>
                        </div>
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter> */}
                </Modal>





            </div>
        )
    }
}
