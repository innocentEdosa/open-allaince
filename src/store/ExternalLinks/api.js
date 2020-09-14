import createApiService from '../../http';

export const fetchExternalLinksService = createApiService({
    method: 'get',
    endpoint: '/external-links/list',
})