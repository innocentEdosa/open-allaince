import { FETCH_ALLIANCE, FETCH_ALLIANCE_COMPLETE} from './type';
import { fetchAllianceService } from './api';

export const fetchAllianceAction = () => async (dispatch) => {
    dispatch({type: FETCH_ALLIANCE});
    try {
        const response = await fetchAllianceService()
            console.log(response, 'these are the alliance')
    } catch (error) {
        console.log(error, error.response, 'this is the error')
    }
}