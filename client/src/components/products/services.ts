import axios from 'axios';

import { API } from '../../constants/services';
import { IFetchProductListParams, IProductList } from './data';

const SERVICE_URL = API.V1_PRODUCTS;

/**
 * @param {IFetchProductListParams} params
 * @param {string} category
 * @returns {Promise<IProductList>}
 */
export const fetchProductList = async (
  params: IFetchProductListParams,
  category: string
): Promise<IProductList> => {
  const res = await axios.request<IProductList>({
    method: 'GET',
    url: `${SERVICE_URL}/${category}`,
    data: params,
  });

  return res.data;
};
