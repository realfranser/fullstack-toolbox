import { IFetchProductListParams } from '../../components/products/services';

export const HOMEPAGE_CATEGORY = 'homepage';

export const HOMEPAGE_PRODUCT_LIST_PROPS: IFetchProductListParams = {
  sort: 'Newest',
  pagination: {
    pageIndex: 1,
    pageSize: 12,
  },
};
