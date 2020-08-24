import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from './ProgressBars';
import { connect } from 'react-redux';
import { fetchMilestoneListAction } from '../../store/commitments/action';

const MileStoneAnalytics = ({
  fetchMilestones,
  fetchingMilestoneList,
  milestonesList,
}) => {
  const computeAnalytics = (data) => {
    const frequencyCounters = {
      completed: 0,
      notStated: 0,
      ongoing: 0,
    };
    data.map(({ percentage_completion }) => {
      if (percentage_completion === 100) {
        frequencyCounters.completed = frequencyCounters.completed + 1;
      } else if (percentage_completion === 0) {
        frequencyCounters.notStarted = frequencyCounters.notStated + 1;
      } else {
        frequencyCounters.ongoing = frequencyCounters.ongoing + 1;
      }
    });

    return data.length ? {
      ongoing: (frequencyCounters.ongoing * 100) / data.length,
      notStarted: (frequencyCounters.notStated * 100) / data.length,
      completed: (frequencyCounters.completed * 100) / data.length,
    } : {
        ongoing: 0,
        notStarted: 0,
        completed: 0,
    };
  };

  const [analytics, setAnalytics] = useState({
    ongoing: 0,
    notStarted: 0,
    completed: 0,
  })

  useEffect(() => {
    fetchMilestones();
  }, [fetchMilestones]);

  useEffect(() => {
    const analytics = computeAnalytics(milestonesList);
    console.log(analytics)
    setAnalytics(analytics)
  }, [fetchingMilestoneList]);

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
                valueEnd={Math.round(analytics.completed)}
              >
                {/* <div className="xs:mb-6 lg:mb-0"> */}
                <ProgressBar
                  strokeWidth={2}
                  showValue={false}
                  className="w-343 h-343"
                  pathStroke="#8CCF4D"
                  valueEnd={Math.round(analytics.ongoing)}
                >
                  <ProgressBar
                    strokeWidth={2}
                    showValue={false}
                    className="w-210 h-210"
                    pathStroke="#32B973"
                    valueEnd={Math.round(analytics.notStarted)}
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
            <ProgressBar valueEnd={Math.round(analytics.notStarted)} className="w-192 h-192">
              <h6 className="font-sans text-base text-text-placeholder ">
                Not Started
              </h6>
            </ProgressBar>
          </div>
          <div className="mb-6 lg:mb-0 lg:mr-4">
            <ProgressBar valueEnd={Math.round(analytics.ongoing)} className="w-192 h-192" pathStroke="#8CCF4D">
              <h6 className="font-sans text-base text-text-placeholder ">
                Ongoing
              </h6>
            </ProgressBar>
          </div>
          <div className="mb-6 lg:mb-0 ">
            <ProgressBar valueEnd={Math.round(analytics.completed)} className="w-192 h-192" pathStroke="#32B973">
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

const mapStateToProps = ({
    commitment: {
        fetchingMilestoneList,
        milestonesList,
    }
}) => ({
    fetchingMilestoneList,
    milestonesList,   
});

const mapDispatchToProps = (dispatch) => ({
fetchMilestones: () => dispatch(fetchMilestoneListAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(MileStoneAnalytics);
