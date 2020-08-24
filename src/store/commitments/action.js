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
import { fetchMilestoneListService, fetchSingleCommitment, fetchSingleCommitmentMilestoneService } from "./api";

export const fetchSingleCommitmentAction = ({ id, category, nap }) => async (
  dispatch,
  getState
) => {
    dispatch({type: FETCH_COMMITMENT})
  try {
    const {
      thematic: { thematicData },
    } = await getState();
    let commitment;
    const napData = thematicData[nap];
    const commitmentCategory =
      napData.find((data) => data.title === category) || {};
    const commitmentsArray = commitmentCategory.commitments || [];
    commitment = commitmentsArray.find((data) => data.id === Number(id));
    if(!commitment) {
        const { data: {
            data
        }} = await fetchSingleCommitment(id)();
        commitment = data
    }
    dispatch({type: FETCH_COMMITMENT_SUCCESS, commitment })
  } catch (error) {
    dispatch({type: FETCH_COMMITMENT_FAILED})
  }
};

export const fetchSingleCommitmentMilestoneAction = (id) => async (dispatch) => {
    dispatch({type: FETCH_COMMITMENT_MILESTONE});
    try {
        const {data: {
            data
        }} = await fetchSingleCommitmentMilestoneService(id)();
        dispatch({type: FETCH_COMMITMENT_MILESTONE_SUCCESS, milestones: data})
    } catch (error) {
        dispatch({type: FETCH_COMMITMENT_MILESTONE_FAILED})
    }
}

export const fetchMilestoneListAction = () => async (dispatch) => {
  dispatch({type: FETCH_MILESTONE_LIST});
  try {
    const {data: {
      data
    }} = await fetchMilestoneListService(); 
    dispatch({type: FETCH_MILESTONE_LIST_SUCCESS, milestones: data})
  } catch (error) {
    dispatch({type: FETCH_COMMITMENT_MILESTONE_FAILED})
  }
}