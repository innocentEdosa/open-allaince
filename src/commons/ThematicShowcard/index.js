import React, { useEffect } from "react";
import thematicList from "./thematicList";
import routes from '../../utilities/routes';
import { Link } from 'react-router-dom';
import "./style.css";
import handleThematicData from '../../HOC/handleThematicData';
import Parser from "html-react-parser";
import Skeleton from 'react-loading-skeleton';

const ThematicShowcard = ({
  fetchingNap1,
  thematicDataNap1,
}) => {
  return (
    <div className="flex flex-col items-center pb-4 bg-shade-background font-sans rounded-rounder">
      <h6 className="text-2xl lg:text-40 font-light font-sans">
        O.G.P Thematic Areas
      </h6>
      <p className="text-center hidden lg:block mt-8 w-946 font-sans text-lg ">
      Countries or States are peculiar from one another. Each state or country’s commitments contained in the Action Plan are built around the global OGP thematic areas.
      </p>
      {/* {fetchingNap1 ? (
        <div className=" px-6 pt-12 flex w-full justify-center relative flex-wrap flex-no-wrap box-border">
          {[1, 2, 3, 4].map(() => (
            <div className=" px-4 py-42 lg:py-8 bg-shade lg:odd:mr-30 box-border flex flex-col-reverse lg:flex-row rounded-lg bg-shade items-center mb-36  flex-shrink-0 w-full lg:w-43percent xl:w-558 lg:justify-center">
              <div className="w-full">
                <div className="w-full mt-2">
                  <Skeleton />
                </div>
                <div className="w-full mt-4">
                  <Skeleton count={5} />
                </div>
              </div>
              <div className="flex-shrink-0 lg:ml-3">
                <Skeleton circle={true} height={80} width={80} />
              </div>
            </div>
          ))}
        </div> */}
      {/* // ) : ( */}
        <div className=" xs:px-6 xs:pt-12 flex w-full justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch box-border">
          {thematicList.map(({ title, info, logo }) => (
            <div
              key={title}
              className=" xs:px-28 xs:py-42 lg:py-8 bg-shade  box-border flex flex-col-reverse lg:flex-row xl:odd:mr-30 rounded-lg items-center mb-36 xs:last:mb-0 lg:last:mb-36  w-full xl:w-558 lg:justify-center"
            >
              <div className="flex-grow mt-10 lg:mt-0 flex flex-col items-center lg:items-start lg:text-left ">
                <Link to={routes.nap2}>
                  <h6 className="card-text text-text-dark font-semibold text-lg md:text-xl tracking-open mb-4 hover:text-text-dark">
                    {title}
                  </h6>
                </Link>
                <p className="card-text mb-6 w-auto lg:pr-6 text-text-dark hover:text-text-dark">
                  <Link to={routes.nap2}>
                    <span className="text-text-dark hover:text-text-dark">
                      {info}
                    </span>
                  </Link>
                </p>

                <p className="text-text-purple text-base cursor-pointer">
                  <Link to={routes.nap2}>
                    <span className="text-text-purple hover:text-text-purple">
                      See Commitments
                    </span>
                  </Link>
                </p>
              </div>

              <div className="flex-shrink-0 w-240">
              <Link to={routes.nap2}>
                <img className="" src={logo} alt="thematic_logo" />
              </Link>
              </div>

            </div>
          ))}
        </div>
      {/* // )} */}
    </div>
  );
};

export default handleThematicData(ThematicShowcard);
