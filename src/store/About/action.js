import { FETCH_ALLIANCE, FETCH_ALLIANCE_COMPLETE } from "./type";
import { fetchAllianceService } from "./api";

export const fetchAllianceAction = () => async (dispatch) => {
  dispatch({ type: FETCH_ALLIANCE });
  try {
    const {
      data: { data },
    } = await fetchAllianceService();
    dispatch({ type: FETCH_ALLIANCE_COMPLETE, alliance: data });
  } catch (error) {
    dispatch({ type: FETCH_ALLIANCE_COMPLETE, alliance: [] });
  }
};
