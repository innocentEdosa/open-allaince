import { FETCH_ALLIANCE, FETCH_ALLIANCE_COMPLETE} from './type';

const initialState = {
    fetchingAlliance: false,
    allianceList: []
}


const allianceReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_ALLIANCE: return ({
            ...state,
            fetchingAlliance: true
        });
        case FETCH_ALLIANCE_COMPLETE: return ({
            ...state,
            fetchingAlliance: false,
            allianceList: action.alliance,
        })
        default: return state;
    }
}
 
export default allianceReducer;