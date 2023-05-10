import {getAxios, getConfig} from '../utils';

const apiAxios = () => getAxios(getConfig().apiBaseUrl.utilitiesBaseUrl);

export const CMSLogin = async (payload) => await apiAxios().post('/LoginCMS', {...payload});
export const AddCmsUser = async (payload) => await apiAxios().post('/AddCmsUser', {...payload});
export const GetAllRoles = async () => await apiAxios().post('/GetAllRoles');
export const GetAllUsers = async () => await apiAxios().post('/GetAllUsers');
