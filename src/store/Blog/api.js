import createApiService from '../../http';

export const fetchBlogService = createApiService({
    method: 'get',
    endpoint: '/news/list',
});