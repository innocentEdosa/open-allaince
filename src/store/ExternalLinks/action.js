import { FETCH_EXTERNAL_LINK, FETCH_EXTERNAL_LINK_COMPLETE } from './type';

import { fetchExternalLinksService } from './api';

export const fetchExternalLinkAction = () => async (dispatch) => {
    dispatch({type: FETCH_EXTERNAL_LINK});

    try {
         const { data: {
             links
         }} = await fetchExternalLinksService();
         dispatch({type: FETCH_EXTERNAL_LINK_COMPLETE, externalLinks: links})
    } catch (error) {
        dispatch({type: FETCH_EXTERNAL_LINK_COMPLETE, externalLinks: []})

    }
}
