import React, { useEffect } from "react";
import thematicList from "./thematicList";
import "./style.css";
import handleThematicData from '../../HOC/handleThematicData';
import Parser from "html-react-parser";
import Skeleton from 'react-loading-skeleton';

const ThematicShowcard = ({
  fetchingNap1,
  thematicDataNap1,
}) => {
  return (
    <div className="flex flex-col items-center pb-12 bg-shade-background font-sans rounded-rounder">
      <h6 className="text-2xl lg:text-40 font-light font-sans">
        O.G.P Thematic Areas
      </h6>
      <p className="text-center hidden lg:block mt-8 w-946 font-sans text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor elementum sed orci quisque molestie eu consectetur sed quam. Id faucibus sed feugiat velit. Ipsum elementum, eget tortor lectus. In vitae leo laoreet consequat. Turpis adipiscing urna, id vitae. Id purus donec.</p>
      {fetchingNap1 ? (
        <div className=" px-6 pt-12 flex w-full justify-center relative flex-wrap flex-no-wrap box-border">
          {[1, 2, 3, 4].map(() => (
            <div className=" px-4 py-42 lg:py-8 bg-shade lg:odd:mr-30 box-border flex flex-col-reverse lg:flex-row rounded-lg bg-shade items-center mb-36  flex-shrink-0 w-full lg:w-43percent xl:w-558 lg:justify-center">
              <div className="w-full">

            <div className ="w-full mt-2"><Skeleton /></div>
            <div className ="w-full mt-4"><Skeleton  count={5}/></div>
              </div>
              <div className="flex-shrink-0 lg:ml-3">
                <Skeleton  circle={true} height={80} width={80}/>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" px-6 pt-12 flex w-full justify-center flex-wrap flex-no-wrap box-border">
          {thematicDataNap1.map(({ title, info, logo }) => (
            <div
              key={title}
              className=" px-4 py-42 lg:py-8 bg-shade lg:odd:mr-30 box-border flex flex-col-reverse lg:flex-row rounded-lg bg-shade items-center mb-36  flex-shrink-0 w-full lg:w-43percent xl:w-558 lg:justify-center"
            >
              <div className="flex-grow mt-10 lg:mt-0 flex flex-col items-center lg:items-start lg:text-left ">
                <h6 className="card-text text-text-dark font-semibold text-lg md:text-xl tracking-open mb-4">
                  {title}
                </h6>
                <p className="card-text mb-6 w-auto lg:pr-10">{Parser(info)}</p>

                <p className="text-text-purple text-base cursor-pointer">
                  See Commitments
                </p>
              </div>
              <div className="flex-shrink-0">
                <img  src={logo} alt="thematic_logo"/>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// created_at: "2019-04-02 11:13:56"
// id: 13
// info: "<p><!--(figmeta)eyJmaWxlS2V5IjoiWUQ0YXhyVm1rWnpDcU"
// logo: "https://s3.eu-west-2.amazonaws.com/openalliance-storage/thematic-area-logos/1554976431.png"
// nap: "1"
// title: "Fiscal Transparency"
// updated_at: "2019-04-11 09:53:51"
export default handleThematicData(ThematicShowcard);
