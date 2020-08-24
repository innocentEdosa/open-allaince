import createApiService from '../../http';

export const signupForNewsLetterService = createApiService({
    method: 'post',
    endpoint: '/subscribe',
})