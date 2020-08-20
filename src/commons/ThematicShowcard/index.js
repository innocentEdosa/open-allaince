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
  console.log(fetchingNap1)
  console.log(thematicDataNap1, 'thema data')
  return (
    <div className="flex flex-col items-center pb-12 bg-shade-pink font-sans rounded-rounder">
      <h6 className="text-2xl lg:text-40 font-light font-sans">
        O.G.P Thematic Areas
      </h6>
      {
fetchingNap1 ?       <div className=" px-6 pt-12 flex w-full justify-center flex-wrap flex-no-wrap box-border">
{[1,2,3,4].map(() => (
  <div
    className=" px-4 py-42 lg:py-8 bg-shade lg:odd:mr-30 box-border flex flex-col-reverse lg:flex-row rounded-lg bg-shade items-center mb-36  flex-shrink-0 w-full lg:w-43percent xl:w-558 lg:justify-center"
  >
    <div className="flex-grow mt-10 lg:mt-0 flex flex-col items-center lg:items-start lg:text-left ">
      <h6 className="w-1/2 mb-4">
        <Skeleton  />
      </h6>
      <p className="w-362 mb-6">
        <Skeleton  count={3} />
      </p>

      <p className="text-text-purple text-base cursor-pointer">
        <Skeleton />
      </p>
    </div>
    {/* <div className="flex-shrink-0">{icon}</div> */}
  </div>
))}
</div>:
      <div className=" px-6 pt-12 flex w-full justify-center flex-wrap flex-no-wrap box-border">
        {thematicDataNap1.map(({ title, info, icon }) => (
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
            {/* <div className="flex-shrink-0">{icon}</div> */}
          </div>
        ))}
      </div>
      }
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
