import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from './ProgressBars';

const MileStoneAnalytics = () => {
  return (
    <div className="bg-shade xs:py-10 lg:py-60 flex justify-center lg:px-6">
      <div className="flex flex-col items lg:w-1146 ">
        <h6 className="font-sans font-normal text-lg lg:text-40 lg:font-light text-center tracking-open text-text-dark">
          Milestones
        </h6>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center xs:mt-6">
          <div className="hidden lg:block lg:mr-4">
            <div className="xs:mb-6 lg:mb-0">
              <ProgressBar
                strokeWidth={2}
                showValue={false}
                className="w-460 h-460"
              >
                {/* <div className="xs:mb-6 lg:mb-0"> */}
                <ProgressBar
                  strokeWidth={2}
                  showValue={false}
                  className="w-343 h-343"
                  pathStroke="#8CCF4D"
                >
                  <ProgressBar
                    strokeWidth={2}
                    showValue={false}
                    className="w-210 h-210"
                    pathStroke="#32B973"
                  >
                    <h6 className="font-sans font-medium text-2xl ">
                      All Progress
                    </h6>
                  </ProgressBar>
                </ProgressBar>

                {/* </div> */}
              </ProgressBar>
            </div>
          </div>
          <div className="xs:mb-6 lg:mb-0 lg:mr-4">
            <ProgressBar className="w-192 h-192">
              <h6 className="font-sans text-base text-text-placeholder ">
                Not Started
              </h6>
            </ProgressBar>
          </div>
          <div className="mb-6 lg:mb-0 lg:mr-4">
            <ProgressBar className="w-192 h-192" pathStroke="#8CCF4D">
              <h6 className="font-sans text-base text-text-placeholder ">
                Ongoing
              </h6>
            </ProgressBar>
          </div>
          <div className="mb-6 lg:mb-0 ">
            <ProgressBar className="w-192 h-192" pathStroke="#32B973">
              <h6 className="font-sans text-base text-text-placeholder ">
                Completed
              </h6>
            </ProgressBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MileStoneAnalytics;