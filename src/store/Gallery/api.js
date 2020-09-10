import createApiService from '../../http';

export const fetchGalleryService = createApiService({
    method: 'get',
    endpoint: '/gallery/list'
});
