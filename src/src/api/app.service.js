import {getAxios} from '../utils';

export const GetFrontendConfig = async () => {
	var res = await getAxios().get('/frontend-config.json');
	return res;
};
