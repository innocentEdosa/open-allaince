import createApiService from '../../http';

export const registerCompanyService = createApiService({
    method: 'post',
    endpoint: '/member-application',
})