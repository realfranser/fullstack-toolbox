import axios from 'axios';

import { SERVICE_URL, IFetchProductListParams, IProductList } from './data';

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
