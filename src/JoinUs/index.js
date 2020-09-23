import React from 'react';
import Form from './form';
import { connect } from 'react-redux';
import { registerCompanyAction } from '../store/Join/action';
import routes from '../utilities/routes';
import { useHistory } from 'react-router-dom';

import './join.css';
const GetInvolved = ({ registerCompany, registering, joinSuccess }) => {

  const { push } = useHistory()
  const handleRegistration =  async (params) => {
    const response = await registerCompany(params);
    if(response ) {
      push(routes.joinSuccess)
    }
    console.log(response, 'this is the response from the place')
  };

  return (
    <>
      <div className="bg-shade-background joinus">
        <div className="content-wrapper lg:flex lg:flex-row lg:justify-center items-start xl:w-1146 mx-auto xl:justify-start xl:px-0">
          <div className="hidden lg:flex   flex-col justify-center mr-6 ">
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
          <div className="bg-shade px-6 lg:px-0 py-10 lg:py-6 flex flex-col flex-shrink-0 xs:w-full lg:w-558">
            <Form registering={registering} onSubmit={handleRegistration} />
          </div>
        </div>
        <div className="join_us_accessory"></div>
      </div>
    </>
  );
};

const mapStateToProps = ({
  join: {
    registering,
    // joinSuccess
  }
}) => ({
  registering,
  // joinSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  registerCompany: (params) => dispatch(registerCompanyAction(params)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(GetInvolved);