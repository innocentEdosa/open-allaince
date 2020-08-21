import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import FooterNav from './footerNav';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter_footer.svg';
import { ReactComponent as FordIcon } from '../../assets/icons/fords.svg';
import { Link } from 'react-router-dom';
import routes from '../../utilities/routes';
import osiwa from '../../assets/osiwa.svg';
import partnersglobal from '../../assets/partnersglobal.svg';
import fordfoundation from '../../assets/fordfoundation.svg';

const Footer = () => {
  const footerIcon = [<FordIcon />,<FordIcon />,<FordIcon/>];

  return (
    <div className="min-h-516  bg-shade-cool py-68">
      <div className="footer-lead flex flex-col items-center justify-center">
        <h6 className="text-center font-sans text-sm md:text-xl font-normal text-text-blm tracking-open mb-6">
          Join us in our mission to promote openness and transparency in Nigeria
        </h6>
        <div className="w-full px-6 lg:w-196 h-45">
          <Link to={routes.joinUs}>
            <PrimaryButton>
              <h6 className="outline-none text-text-snow hover:text-text-dark text-base font-sans tracking-open font-bold h-full flex items-center justify-center">
                Get Involved
              </h6>
            </PrimaryButton>
          </Link>
        </div>
      </div>
      <div className="mt-8 lg:mt-24 mb-16">
        <FooterNav />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="xs:mb-4 lg:mb-0 flex flex-col">
          <p className="tracking-open text-text-dark text-2xl lg:text-base font-normal font-sans mb-6 lg:mb-4">
            Brought to you by
          </p>
          <ul className="flex flex-col lg:flex-row items-center">
            <li className="xs:mb-4 lg:mb-0 lg:mr-4">
              <a target="_blank" rel="noopener noreferrer"  href="http://www.osiwa.org/">
                <img alt="" src={osiwa}  />
              </a>{" "}
            </li>
            <li className="xs:mb-4 lg:mb-0 lg:mr-4">
              <a target="_blank" rel="noopener noreferrer"  href="https://www.partnersglobal.org/">
                <img alt="" src={partnersglobal} />
              </a>{" "}
            </li>
            <li className="xs:mb-4 lg:mb-0">
              <a target="_blank" rel="noopener noreferrer"  href="https://www.fordfoundation.org/">
                <img alt=""  src={fordfoundation} />
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="lg:ml-76 flex lg:self-end">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/OpenAllianceNG/" className="mr-6 lg:mr-42">
            <Facebook />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/OpenAllianceNG">
            <Twitter />
          </a>
        </div>
      </div>
      <div className="mt-42 px-6 flex justify-center">
        <p className="text-xs text-center tracking-open font-normal">
          Copyright © 2019 Open Alliance . All rights reserved. Made in Lagos by
          BudgIT
        </p>
      </div>
    </div>
  );
};

export default Footer;
