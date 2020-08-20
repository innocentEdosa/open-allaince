import React, { useRef } from "react";
import storyList from "./storyList";

const Story = () => {
  return (
    <div className="flex flex-col items-center h-682 py-60 bg-primary-green">
      <h6 className="text-text-snow font-light font-sans tracking-open text-40">
        Stories
      </h6>
      <div className="bg-transparent mt-12 flex">
        {storyList.map(({ description, imgUrl }, index) => {
          if (storyList.length - 1 === index) {
            return (
              <div
              key={index}
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.59) 19.66%, rgba(0, 0, 0, 0) 100%), url(https://s3.eu-west-2.amazonaws.com/openalliance-storage/news/images/1553863664.jpg)",
                  filter: "drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.43))",
                  // background: 'red',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="mr-30 w-362 h-468 rounded flex flex-col justify-center items-center"
              >
                <ul>
                  <li className="h-60 w-282 rounded border-3 border-shade flex items-center justify-center text-xl text-text-snow font-sans font-extrabold cursor-pointer">
                    <h6>View all stories</h6>
                  </li>
                </ul>
              </div>
            );
          }
          return (
            <div
            key={index}
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.59) 19.66%, rgba(0, 0, 0, 0) 100%), url(https://s3.eu-west-2.amazonaws.com/openalliance-storage/news/images/1553863664.jpg)",
                filter: "drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.43))",
                // background: 'red',
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="mr-30 w-362 h-468 rounded flex flex-col"
            >
              <div className="flex-grow"></div>
              <div className="flex-shrink-0 flex items-center justify-center pb-12 px-38">
                <p className="text-text-snow text-center font-semibold text-2xl tracking-open">
                  OGP TEAM meets with Government and Civil Society
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Story;
