import { FETCH_THEMATIC_AREA, FETCH_THEMATIC_AREA_SUCCESS, FETCH_THEMATIC_AREA_FAILED} from './types';

const initialState  = {
    fetchingThematicData: {
        nap1: false,
        nap2: false,
    },
    thematicData: {
        nap1: [],
        nap2: [],
    }
};

const thematicReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_THEMATIC_AREA: return ({
            ...state,
            fetchingThematicData: {
                ...state.fetchingThematicData,
                nap1: action.nap === 1,
                nap2: action.nap === 2,
            },
        });
        case FETCH_THEMATIC_AREA_SUCCESS: return ({
            ...state,
            fetchingThematicData: {
                ...state.fetchingThematicData,
                nap1: action.nap === 1 ? false : state.fetchingThematicData.nap1,
                nap2: action.nap === 2 ? false : state.fetchingThematicData.nap2,
            },
            thematicData: {
                nap1: action.nap === 1 ? action.thematicData : state.thematicData.nap1,
                nap2: action.nap === 2 ? action.thematicData: state.thematicData.nap2,
            }
        });
        case FETCH_THEMATIC_AREA_FAILED: return ({
            ...state,
            fetchingThematicData: {
                ...state.fetchingThematicData,
                nap1: action.nap === 1 ? false : state.fetchingThematicData.nap1,
                nap2: action.nap === 2 ? false : state.fetchingThematicData.nap2,
            },
        })
        default: return state
    }
}


export default thematicReducer;
