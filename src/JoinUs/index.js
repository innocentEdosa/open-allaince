import React from 'react';
import Form from './form';
import { connect } from 'react-redux';
import { registerCompanyAction } from '../store/Join/action';

import './style.css';
const GetInvolved = ({ registerCompany }) => {
  const handleRegistration = (params) => {
    registerCompany(params);
  };

  return (
    <>
      <div className="bg-shade-background joinus">
        <div className="content-wrapper lg:flex lg:flex-row lg:justify-center items-start">
          <div className="hidden lg:flex   flex-col justify-center mr-6">
            <div>
              <p className="font-sans text-sm tracking-open leading-6">
                Open Alliance started in the wake of 2014 through the initiative
                of its pioneer member organizations; BudgIT Foundation, Public
                and Private Development Centre (PPDC) and Media Right Agenda
                (MRA) as part of the collective action to spur the Nigeria
                Government to join the global Open Government Partnership (OGP),
                which Nigeria eventually did in July 2016. Today, Open Alliance
                has grown to become a coalition of over 150 Civil Society
                Organizations (CSOs) across the 36 states of Nigeria seeking to
                promote good governance in Nigeria and ensuring that the Nigeria
                government both at the federal and subnational level uphold the
                principles of OGP and the citizens derive maximum benefit from
                openness and transparency needed for inclusive development and
                efficient service delivery.
              </p>
              <h6 className="mt-8 text-base font-sans font-semibold tracking-open">
                Open Alliance coordinator
              </h6>
            </div>
            <div className="join_us_accessory_2 "></div>
          </div>
          <div className="bg-shade px-6 lg:px-0 py-10 lg:py-6 flex flex-col flex-shrink-0">
            <h6 className="text-text-lemon font-sans font-bold text-sm lg:text-base tracking-open mb-2 lg:mx-6">
              The Alliance is open to adding more members
            </h6>
            <h6 className="lg:text-lg text-text-sm font-sans tracking-open text-text-dark lg:mx-6">
              {" "}
              We are excited you're here please fill the form below
            </h6>
            <Form onSubmit={handleRegistration} />
          </div>
        </div>
        <div className="join_us_accessory"></div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  registerCompany: (params) => dispatch(registerCompanyAction(params)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(GetInvolved);