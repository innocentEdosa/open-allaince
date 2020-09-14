import { 
    FETCH_DOCUMENT,
    FETCH_DOCUMENT_COMPLETE
} from './type';

const initialState = {
    fetchingDocuments: true,
    documents: []
}

const documentReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DOCUMENT: return ({
            ...state,
            fetchingDocuments: true,
        })
        case FETCH_DOCUMENT_COMPLETE: return ({
            ...state,
            fetchingDocuments: false,
            documents: action.document,
        })
        default: return state;
    }
}

export default documentReducer;
