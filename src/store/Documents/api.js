import createApiService from '../../http';

export const fetchDocumentService = createApiService({
    method: 'get',
    endpoint: '/documents/list'
})