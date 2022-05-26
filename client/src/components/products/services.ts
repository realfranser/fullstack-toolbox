import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

import { API } from '../../constants/services';
import {
  DEFAULT_PRODUCT_LIST,
  IFetchProductListParams,
  IProductList,
} from './data';

const SERVICE_URL = API.V1_PRODUCTS;
// const SERVICE_URL = API.V1_PRODUCTS + '/invalid';

/**
 * @param {IFetchProductListParams} params
 * @param {string} category
 * @returns {Promise<IProductList>}
 */
export const fetchProductList = async (
  params: IFetchProductListParams,
  category: string
): Promise<IProductList> => {
  const url = `${SERVICE_URL}/${category}`;
  const res = await axios.get<IProductList>(url, {
    params: params,
  });

  if (res.status !== StatusCodes.OK) return DEFAULT_PRODUCT_LIST;
  return res.data;
};
