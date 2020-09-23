import React from "react";
import useQuery from "../HOC/useQuery";
import aboutList from "./aboutData";
import NoLogo from '../assets/icons/noLogo.svg';

const AboutDetails = ({ fetchingAlliance, allianceList }) => {
  const { tab } = useQuery();

  return (
    <div className="mt-36 lg:mt-20 ">
      {tab && tab !== "about" && (
        <div className=" flex flex-col items-stretch md:flex-row md:flex-wrap md:justify-between w-full">
          {allianceList.map(
            ({ id, name, logo, email, address, phone, state }) => (
              <div
                key={id}
                className="bg-shade memberCardWrapper flex justify-center md:items-start flex-col items-center xs:mb-6 xs:p-6"
              >
                <picture className="xs:mb-4 h-56 overflow-hidden">
                  <source
                    className="h-full"
                    srcset={logo || NoLogo}
                    media="(min-width: 600px)"
                  />
                  <img className="h-full" src={logo || NoLogo} alt={name} />
                </picture>
                <div className="font-sans text-sm tracking-open font-medium text-text-dark xs:text-center md:text-left">
                  <h6 className="xs:mb-4 last:mb-0 lg:mb-3 lg:last:mb-0">
                    Website: <a href={email}>{name}</a>
                  </h6>
                  <h6 className="xs:mb-4 last:mb-0 lg:mb-3 lg:last:mb-0">{`Contact Number: ${
                    phone || "N/A"
                  }`}</h6>
                  <h6 className="xs:mb-4 last:mb-0 lg:mb-3 lg:last:mb-0">{`Office Address: ${
                    address || "N/A"
                  } `}</h6>
                  <h6 className="xs:mb-4 last:mb-0 lg:mb-3 lg:last:mb-0">{`state: ${
                    state || "N/A"
                  }`}</h6>
                </div>
              </div>
            )
          )}
        </div>
      )}
      {(tab === "about" || !tab) && (
        <div>
          <div className="lg:flex flex-col items-center md:text-center">
            <h6 className="font-sans tracking-open text-text-dark xs:text-sm lg:text-4xl font-semibold xs:leading-snug xl:w-1010  mb-28">
              Open Alliance is a group of civil society organisations seeking to
              promote good governance in Nigeria
            </h6>
            <p className="text-text-grey text-xs font-sans tracking-open lg:text-base xl:w-754 ">
              To ensure that Nigeria derives its maximum benefit from openness
              and transparency needed for inclusive development and efficient
              service delivery
            </p>
          </div>
          <div className="mt-56 lg:mt-140">
            <h6 className="font-bold text-2xl tracking-open text-text-green mb-36">
              Our Mission
            </h6>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 lg:pr-8">
                {aboutList.map((aboutText) => (
                  <p className="mb-6 last:mb-0 text-text-blm text-sm font-sans  font-normal lg:text-base">
                    {aboutText}
                  </p>
                ))}
              </div>
              <div className="hidden lg:flex lg:w-1/2 xs:py-6  items-stretch justify-between">
                <div className="aboutGalleryItem aboutGalleryRight"></div>
                <div className="flex flex-col aboutGalleryItem">
                  <div className="mb-10 aboutGalleryLeft-1"></div>
                  <div className="aboutGalleryLeft-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutDetails;
