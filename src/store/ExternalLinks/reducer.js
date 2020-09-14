import { FETCH_EXTERNAL_LINK, FETCH_EXTERNAL_LINK_COMPLETE } from './type';

const initialState = {
    fetchingExternalLink: false,
    externalLinks: []
}

 const externalLinkReducer = (state = initialState, action ) => {
switch(action.type){
    case FETCH_EXTERNAL_LINK: return ({
        ...state,
        fetchingExternalLink: true
    });
    case FETCH_EXTERNAL_LINK_COMPLETE: return ({
        ...state,
        fetchingExternalLink: false,
        externalLinks: action.externalLinks
    })
    default: return state;
}
}

export default externalLinkReducer;
