import createApiService from '../../http';

export const fetchAllianceService = createApiService({
    method: 'get',
    endpoint: '/members/list'
})