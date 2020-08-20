import React, { useState } from 'react';
import dateFormat from 'dateformat';
import { Collapse } from "reactstrap";
import { ReactComponent as DotIcon } from '../../assets/icons/Ellipse.svg';
import { ReactComponent as ChevronDown } from '../../assets/icons/arrow-down(1).svg';
import Parser  from 'html-react-parser';

const ThematicCard = ({
    activeCommitment,
    category,
}) => {

    const [showMda, setShowMda] = useState(false);

    const toggleMda = (e) => {
        e.preventDefault();
        setShowMda((prev) => !prev)
    };

    return (             <div
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        className="bg-shade flex-grow xl:w-362 xl:flex-grow-0 p-4 rounded-rounded16"
      >
        <div>
          <h6 className="mb-2 font-sans text-sm text-text-placeholder tracking-open">
            Thematic Area
          </h6>
          <h6 className="font-sans text-lg font-semibold text-text-lemon">
            {category}
          </h6>
          <div className="mt-45">
            <h6 className="text-base font-medium tracking-open text-text-blm mb-4">
              Lead MDA
            </h6>
            <ul>
              <li className=" text-base font-sans flex items-center tracking-open">
                <DotIcon />
                <h6 className="ml-3">{activeCommitment.lead_mda}</h6>
              </li>
            </ul>
          </div>
          <div className="mt-45">
            <h6 className="text-base font-medium tracking-open text-text-blm mb-4">
              Responsible Person(s)
            </h6>
            <ul>
              <li className=" text-base font-sans flex items-center tracking-open">
                <DotIcon />
                <h6 className="ml-3">
                  {activeCommitment.responsible_person}
                </h6>
              </li>
            </ul>
          </div>
          <div className="mt-45">
            <h6 className="text-base font-medium tracking-open text-text-blm mb-4 font-sans">
              Implementation Partners{" "}
            </h6>
            <div className="mb-4">
              <button onClick={toggleMda} className="flex items-center outline-none focus:outline-none">
                <h6 className="mr-2 text-text-blue text-base font-semibold font-sans tracking-open">
                  MDAs
                </h6>
                <ChevronDown />
              </button>
              <Collapse isOpen={showMda}>
                  <div className="mt-2">


                {activeCommitment.implementation_partners &&
                  Parser(activeCommitment.implementation_partners)}{" "}
                  </div>
              </Collapse>
            </div>
            <div>
              <button className="flex items-center outline-none focus:outline-none">
                <h6 className="mr-2 text-text-blue text-base font-semibold font-sans tracking-open">
                  CSO, Private Sector, etc.
                </h6>
                <ChevronDown />
              </button>
            </div>
          </div>
          <div className="mt-45">
            <h6 className="text-base font-medium tracking-open text-text-blm mb-4 font-sans">
              Dates
            </h6>

            <p>{`${dateFormat(
              activeCommitment.start_date,
              "mmmm yyyy"
            )} - ${dateFormat(
              activeCommitment.end_date,
              "mmmm yyyy"
            )}`}</p>
          </div>
          <div className="mt-45">
            <h6 className="font-sans text-base font-medium tracking-open text-text-blm mb-4">
              Funding Source
            </h6>

            <p className="text-base text-text-blm font-sans font-normal">
              {activeCommitment.funding_source}
            </p>
          </div>
        </div>
      </div> );
}
 
export default ThematicCard;