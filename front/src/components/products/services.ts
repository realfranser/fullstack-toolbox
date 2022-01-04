import axios from 'axios';

import { IPaginationRequest, IPaginationResponse } from '../pagination';
import { API } from '../../constants/services';

const SERVICE_URL = API.V1_PRODUCTS;

export interface IProduct {
  id: number;
  img: string;
}

export interface IProductList {
  items: IProduct[];
  pagination: IPaginationResponse;
}

export interface IFetchProductListParams {
  color?: 'Black' | 'Blue' | 'Green' | 'Red' | 'White' | 'Yellow';
  size?: 'XS' | 'S' | 'M' | 'L' | 'XL';
  sort: 'asc' | 'desc' | 'newest';
  pagination: IPaginationRequest;
}

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
