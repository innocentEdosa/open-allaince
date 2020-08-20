import createApiService from '../../http';

export const fetchSingleCommitment = (id) => createApiService({
    method: 'get',
    endpoint: `/commitment/${id}`
});

export const fetchSingleCommitmentMilestoneService = (id) => createApiService({
    method: 'get',
    endpoint: `/commitment/${id}/milestones`,
});
