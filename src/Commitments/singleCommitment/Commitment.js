import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSingleCommitmentAction, fetchSingleCommitmentMilestoneAction } from '../../store/commitments/action';
import { useParams, useHistory } from 'react-router-dom';
import useQuery from '../../HOC/useQuery'
import Footer from '../../commons/Footer';
import AboutCommitment from './about';
import CommitmentMilestones from './milestone';


import ThematicCard from './ThematicCard';

const SingleCommitment = ({
    fetchSingleCommitment,
    fetchingCommitment,
    activeCommitment,
    fetchMilestones,
    fetchingMilestone,
    milestones,
}) => {
    const {category, id, nap} = useParams()
    const { push, location: {pathname}} = useHistory();
    const {activeTab} = useQuery();
    useEffect(() => {
        fetchSingleCommitment({
            category,
            id,
            nap,
        })
    }, [id, category]);

    const fetchingCommitmentMilestones = () => {

    }

    useEffect(() => {
        console.log('i am fetching the milestone')
        if(activeTab === 'milestone'){
console.log('this function should run now')
            fetchMilestones(id)
        }
    }, [id, activeTab])

    const handleTabRoute = (query) => {
        push(`${pathname}?activeTab=${query}`)
    }

    const tabButtonClasses = "w-2/4 h-60 rounded-t-rounded16 bg-shade-milk outline-none focus:outline-none text-sm text-text-dark font-medium tracking-open font-sans lg:text-lg";

    const activeTabButtonClasses = ` w-2/4 h-60 rounded-t-rounded16 outline-none focus:outline-none text-sm text-text-blue font-medium tracking-open font-sans lg:text-lg bg-shade`

    return (
      <>
        <div className="bg-shade-pink px-6 py-10 ">

          <div className="flex flex-col items-center lg:w-1146 lg:items-start lg:mx-auto mb-42">
            <h6 className="font-semibold text-text-lemon text-2xl mb-4 font-sans">
              Commitment
            </h6>
            {fetchingCommitment && <div>Loading</div>}
            {!fetchingCommitment && (
              <p className="text-center text-text-dark text-base font-sans font-medium leading-normal">
                {activeCommitment.title}
              </p>
            )}
          </div>
          <div className="flex flex-col lg:flex-row xl:justify-center lg:items-start">
            <div
              style={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
              className="tab-section lg:w-3/5 lg:mr-8 xl:w-754 rounded-rounded16 mb-8 lg:mb:0 overflow-hidden"
            >
              <div className="tab-wrapper ">
                <button
                  onClick={() => handleTabRoute("about")}
                  className={
                    activeTab === "about" || !activeTab
                      ? activeTabButtonClasses
                      : tabButtonClasses
                  }
                >
                  About
                </button>
                <button
                  onClick={() => handleTabRoute("milestone")}
                  className={
                    activeTab === "milestone"
                      ? activeTabButtonClasses
                      : tabButtonClasses
                  }
                >
                  Milestones
                </button>
              </div>
              {(activeTab === "about" || !activeTab) &&
                activeCommitment.about && (
                  <AboutCommitment about={activeCommitment.about} />
                )}
              {activeTab === "milestone" && (
                <CommitmentMilestones
                  fetchingMilestone={fetchingMilestone}
                  milestones={milestones}
                />
              )}
            </div>
<ThematicCard category={category} id={id} nap={nap} activeCommitment={activeCommitment} />
          </div>
        </div>
        <Footer />
      </>
    );
}
 
const mapStateToProps = ({
    commitment: {
        fetchingCommitment,
        activeCommitment,
        milestones,
        fetchingMilestone,
    }
}) => ({
fetchingCommitment,
activeCommitment,
milestones,
fetchingMilestone,
})
const mapDispatchToProps = (dispatch) => ({
 fetchSingleCommitment: (params) => dispatch(fetchSingleCommitmentAction(params)),
 fetchMilestones: (params) => dispatch(fetchSingleCommitmentMilestoneAction(params)),
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleCommitment);
