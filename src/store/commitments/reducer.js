import {
  FETCH_COMMITMENT,
  FETCH_COMMITMENT_FAILED,
  FETCH_COMMITMENT_SUCCESS,

  FETCH_COMMITMENT_MILESTONE,
  FETCH_COMMITMENT_MILESTONE_FAILED,
  FETCH_COMMITMENT_MILESTONE_SUCCESS,
} from "./type";

const initialState = {
    fetchingMilestone: false,
    fetchingCommitment: false,
    activeCommitment: {
    },
    milestones: [],
};

const commitmentReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_COMMITMENT_MILESTONE: return ({
            ...state,
            fetchingMilestone: true
        });
        case FETCH_COMMITMENT_MILESTONE_FAILED: return ({
            ...state,
            fetchingMilestone: false,
        });
        case FETCH_COMMITMENT_MILESTONE_SUCCESS: return ({
            ...state,
            fetchingMilestone: false,
            milestones: action.milestones
        });
        case FETCH_COMMITMENT: return ({
            ...state,
            fetchingCommitment: true,
            activeCommitment: {},
            milestones: [],
        });
        case FETCH_COMMITMENT_FAILED: return ({
            ...state,
            fetchingCommitment: false,
        });
        case FETCH_COMMITMENT_SUCCESS: return ({
            ...state,
            activeCommitment: action.commitment,
            fetchingCommitment: false,
        })
        default: return state;
    }
}

export default commitmentReducer;
