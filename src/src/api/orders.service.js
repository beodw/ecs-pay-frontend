import {getAxios, getConfig} from '../utils';

const apiAxios = () => getAxios(getConfig().apiBaseUrl.ordersBaseUrl);

export const GetAllOrders = async () => await apiAxios().post('/Order/GetAllCustomerOrders');
export const GetCartOrders = async () => await apiAxios().post('/Order/GetCartOrders');
export const GetPaidOrders = async () => await apiAxios().post('/Order/GetPaidOrders');
export const GetNotPaidOrders = async () => await apiAxios().post('/Order/GetNotPaidOrders');
export const GetCompletedOrders = async () => await apiAxios().post('/Order/GetCompletedOrders');
export const GetCustomerOrderById = async (id) => await apiAxios().post('/Order/GetCustomerOrderById', {id});
