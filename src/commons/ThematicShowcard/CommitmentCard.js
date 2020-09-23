import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import parser from 'html-react-parser';
import handleThematicData from '../../HOC/handleThematicData';





const CommitmentSlide = ({ fetchingNap1, thematicDataNap1 = [] }) => {
  const numberOfScrolls = useRef(2);

  const generateRandomArrayOfCommitments = (
    arrOfCommitments,
    numberOfElements = 2
  ) =>
    arrOfCommitments.sort(() => 0.5 - Math.random()).slice(0, numberOfElements);

  const giveArrayElementsKey = (arr) =>
    arr.map((element) => {
      element.animationKey = Math.random().toString(36).slice(2);
      return element;
    });

  useEffect(() => {
    if (thematicDataNap1.length) {
      numberOfScrolls.current = Math.ceil(thematicDataNap1.length / 2);
    }
  }, [fetchingNap1]);

  const [causeAReload, setCauseAReload] = useState(false)


  useEffect(() => {
    setCauseAReload((prev) => !prev)
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // rows: 2,
    autoplay: true,
    className: "xs:w-full focus:outline-none outline-none active:outline-none",
  };

  const CommitmentCard = (props) => {
    const { ...rest } = props;
    return (
      <div {...rest}>
        <div className="flex flex-col lg:flex-row xl:w-1146 mx-auto outline-none focus:outline-none active:outline-none">
          {giveArrayElementsKey(
            generateRandomArrayOfCommitments(thematicDataNap1)
          ).map(({ title, info, animationKey }) => {
            return (
              <div
                key={animationKey}
                style={{
                  background:
                    "linear-gradient(101.65deg, #E0F0E0 44.2%, #ADBAE6 266.91%)",
                }}
                className="rounded-lg xs:px-6 xs:py-10 mb-6 last:mb-0 lg:mr-30 lg:last:mr-0 lg:mb-0 xs:w-full lg:w-1/2 flex-shrink-0 bg-shade-test"
              >
                <h6 className="font-sans font-bold tracking-open text-xl mb-4">
                  {title}{" "}
                </h6>
                <p>{parser(info)}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="xs:px-6 xs:py-10 lg:flex lg:justify-center">
      <div className="w-full overflow-visible outline-none focus:outline-none active:outline-none ">
        { !fetchingNap1 && <Slider {...settings}>
          {generateRandomArrayOfCommitments(
            thematicDataNap1,
            numberOfScrolls.current
          ).map((_, index) => (
            <CommitmentCard key={index} />
          ))}
        </Slider>}
      </div>
    </div>
  );
};

export default handleThematicData(CommitmentSlide);