import { useLocation } from 'react-router-dom';
import qs from 'qs';

const useQuery = () => qs.parse(useLocation().search, { ignoreQueryPrefix: true });

export default useQuery;
