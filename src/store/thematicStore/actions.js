import { FETCH_THEMATIC_AREA, FETCH_THEMATIC_AREA_SUCCESS, FETCH_THEMATIC_AREA_FAILED } from './types';
import { fetchThematicAreas } from './api';

export const fetchThematicAreaAction = (nap = 2) => async (dispatch) => {
dispatch({type: FETCH_THEMATIC_AREA, nap });
try {
    const {data: {
        data
    }} = await fetchThematicAreas(nap)();
    dispatch({
        type: FETCH_THEMATIC_AREA_SUCCESS, nap,  thematicData: data
    })
} catch (error) {
    dispatch({ type: FETCH_THEMATIC_AREA_FAILED })
}
}