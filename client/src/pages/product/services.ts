import axios from 'axios';

import { SERVICE_URL, IProduct } from './data';

/**
 * @param {IFetchProductListParams} params
 * @param {string} category
 * @returns {Promise<IProductList>}
 */
export const fetchProduct = async (id: number): Promise<IProduct> => {
  const res = await axios.request<IProduct>({
    method: 'GET',
    url: `${SERVICE_URL}/:${id}`,
  });

  return res.data;
};
