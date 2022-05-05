import axios from 'axios';

import { API } from '../../constants/services';
import { IProduct } from './data';

const SERVICE_URL = API.V1_PRODUCT;

/**
 * @param {number} id
 * @returns {Promise<IProductList>}
 */
export const fetchProduct = async (id: number): Promise<IProduct> => {
  const res = await axios.request<IProduct>({
    method: 'GET',
    url: `${SERVICE_URL}/:${id}`,
  });

  return res.data;
};
