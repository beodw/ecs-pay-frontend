import {getAxios, getConfig} from '../utils';

const apiAxios = () => getAxios(getConfig().apiBaseUrl.productsBaseUrl);

export const GetAllProducts = async () => await apiAxios().post('/GetAllProducts');
export const GetAllPublishedProducts = async () => await apiAxios().post('/GetAllPublishedProducts');
export const GetAllInActiveProducts = async () => await apiAxios().post('/GetAllInActiveProducts');
export const GetProductById = async (productId) => await apiAxios().post('/GetProductById', productId);
export const GetProductsByStatus = async (status) => await apiAxios().post('/GetProductsByStatus', status);
export const GetAllProductPackages = async (payLoad) => await apiAxios().post('/GetAllProductPackageByProductId', {...payLoad});
export const UpdateProduct = async (payLoad) => await apiAxios().post('/UpdateProduct', {...payLoad});
export const UpdateProductPackage = async (payLoad) => await apiAxios().post('/UpdateProductPackage', {...payLoad});
export const ArchiveProductPackage = async (payLoad) => await apiAxios().post('/ArchiveProductPackage', {...payLoad});
export const AddProductPackage = async (payLoad) => await apiAxios().post('/AddProductPackage', {...payLoad});
export const AddAProduct = async (payLoad) => await apiAxios().post('/AddProduct', {...payLoad});
export const PublishProductById = async (id) => await apiAxios().post('/PublishProductById', {id});
export const DeactivateProductById = async (id) => await apiAxios().post('/DeactivateProductById', {id});
export const ActivateProductById = async (id) => await apiAxios().post('/ActivateProductById', {id});
export const ArchiveProduct = async (id) => await apiAxios().post('/ArchiveProduct', {id});
export const GetAllAttributes = async () => await apiAxios().post('/GetAllAttributes');
export const AddAttribute = async (payLoad) => await apiAxios().post('/AddAttribute', {...payLoad});
export const GetAllTags = async () => await apiAxios().post('/GetAllTags');
export const AddTag = async (payLoad) => await apiAxios().post('/AddTag', {...payLoad});
