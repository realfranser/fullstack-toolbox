import axios from 'axios';

import { API } from '../../constants/services';
import { IFetchProductListParams, IProductList } from './data';

//const SERVICE_URL = API.V1_PRODUCTS;
const SERVICE_URL = API.V1_PRODUCTS + '/invalid';

/**
 * @param {IFetchProductListParams} params
 * @param {string} category
 * @returns {Promise<IProductList>}
 */
export const fetchProductList = async (
  params: IFetchProductListParams,
  category: string
): Promise<IProductList | undefined> => {
  console.log('These are the params: \n');
  console.log(params);
  const url = `${SERVICE_URL}/${category}`;
  const res = await axios.get<IProductList>(url, {
    data: params,
    params: params,
  });

  return res.data;
};
