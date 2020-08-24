import {
  FETCH_COMMITMENT,
  FETCH_COMMITMENT_FAILED,
  FETCH_COMMITMENT_SUCCESS,

  FETCH_COMMITMENT_MILESTONE,
  FETCH_COMMITMENT_MILESTONE_FAILED,
  FETCH_COMMITMENT_MILESTONE_SUCCESS,

  FETCH_MILESTONE_LIST,
  FETCH_MILESTONE_LIST_FAILED,
  FETCH_MILESTONE_LIST_SUCCESS,
} from "./type";

const initialState = {
    fetchingMilestoneList: false,
    fetchingMilestone: false,
    fetchingCommitment: false,
    activeCommitment: {
    },
    milestones: [],
    milestonesList: [],

};

const commitmentReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MILESTONE_LIST: return ({
            ...state,
            fetchingMilestoneList: true,
        });
        case FETCH_MILESTONE_LIST_SUCCESS: return ({
            ...state,
            fetchingMilestoneList: false,
            milestonesList: action.milestones

        });
        case FETCH_MILESTONE_LIST_FAILED: return ({
            ...state,
            fetchingMilestoneList: false,
        });
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
