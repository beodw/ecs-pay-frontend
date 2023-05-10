import {getAxios, getConfig} from '../utils';

const apiAxios = () => getAxios(getConfig().apiBaseUrl.workflowBaseUrl);

export const GetComponentCategories = async () => await apiAxios().post('/GetComponentCategories');
export const GetComponentsByCategoryId = async (id) => await apiAxios().post('/GetComponentByCategoryId', {id});
export const CreateWorkflow = async (payload) => await apiAxios().post('/AddWorkflow', {...payload});
export const GetAllWorkflows = async () => await apiAxios().post('/GetAllWorkflows');
export const GetWorkflowById = async (id) => await apiAxios().post('/GetWorkflowWithComponentData', {id});
export const UpdateWorkflow = async (payload) => await apiAxios().post('/UpdateWorkflow', {...payload});
export const AddComponent = async (payload) => await apiAxios().post('/AddComponent', {...payload});
export const GetComponentById = async (id) => await apiAxios().post('/GetComponentById', {id});
export const UpdateComponent = async (payload) => await apiAxios().post('/UpdateComponent', {...payload});
export const GetAllWorklows = async () => await apiAxios().post('/api/GetAllWorkflows');
