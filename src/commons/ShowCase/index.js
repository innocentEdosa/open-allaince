import React from "react";
import "./style.css";
import PrimaryButton from "../Button/PrimaryButton";
import routes from '../../utilities/routes';
import {Link} from 'react-router-dom';

const ShowCase = () => {
  return (
    <div className="flex items-center justify-center h-552 showcase-wrapper font-sans">
      <div className="text-text-snow flex items-center flex-col">
        <h6 className="text-35 md:text-60 font-sans font-medium uppercase tracking-smClose md:tracking-close mb-4 text-center">Welcome to <br className="lg:hidden"/>open alliance</h6>
        <p className="text-xs md:text-lg tracking-open mb-129 md:mb-8 text-center font-sans px-8 lg:px-0">
          A coliation of civil society organisation working together to
          improving openness and accountabilty in government
        </p>

        <div className="w-full px-6 md:px-0 h-12 md:w-196 ">
          <Link to={routes.joinUs}>
          
          <PrimaryButton variant="secondary">
            <h6 className="text-text-blue text-xl font-bold font-sans ">Get Involved</h6>
          </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
