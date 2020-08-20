import createApiService from '../../http';

export const fetchThematicAreas = (nap) => createApiService({
    method: 'get',
    endpoint: `/thematic-areas/commitments/list?nap=${nap}`,
  });