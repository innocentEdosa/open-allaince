import createApiService from '../../http';

export const fetchBlogService = createApiService({
    method: 'get',
    endpoint: '/news/list',
});

export const fetchSingleBlogService = ({id}) => createApiService({
    method: 'get',
    endpoint: `/read-news/${id}`,
})