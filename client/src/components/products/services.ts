import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

import { API } from '../../constants/services';
import {
  BLUE_PRODUCT_LIST,
  DEFAULT_PRODUCT_LIST,
  DEFAULT_PRODUCT_LIST_2,
  IFetchProductListParams,
  IProductList,
  RED_PRODUCT_LIST,
  SUMMER_PRODUCT_LIST,
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

export const mockFetchProductList = (
  params: IFetchProductListParams,
  category: string,
  pageIndex: number
): IProductList => {
  if (params.color === 'Blue') {
    return BLUE_PRODUCT_LIST;
  }

  if (params.color === 'Red') {
    return RED_PRODUCT_LIST;
  }

  if (category === 'summer') {
    return SUMMER_PRODUCT_LIST;
  }

  if (pageIndex === 2) {
    return DEFAULT_PRODUCT_LIST_2;
  }

  console.log(`this is the page index: ${params.pagination.pageIndex}`);
  console.log(`this is the color: ${params.color}`);

  return DEFAULT_PRODUCT_LIST;
};
