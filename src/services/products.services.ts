import {FmsaApi} from '../http/fmsa-api';
/**
 * Function to get products.
 */
async function getProducts(): Promise<any> {
  const response = await FmsaApi.getInstance().getRequest('/api/v1/products');
  if (response === undefined) {
    return Promise.reject(new Error('getProducts'));
  }

  const {data} = response;
  return data;
}

export const productsServices = {
  getProducts,
};
