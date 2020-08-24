import { SIGNUP_FOR_NEWSLETTER, SIGNUP_FOR_NEWSLETTER_FAILED, SIGNUP_FOR_NEWSLETTER_SUCCESS} from './type';

const initialState = {
    signingUp: false,
};

const newsLetterReducer = (state = initialState, action ) => {
switch(action.type){
    case SIGNUP_FOR_NEWSLETTER: return ({
        signingUp: true,
    });
    case SIGNUP_FOR_NEWSLETTER_FAILED: return ({
        signingUp: false
    });
    case SIGNUP_FOR_NEWSLETTER_SUCCESS: return ({
        signingUp: false
    })
    default: return state;
}
}

export default newsLetterReducer;
