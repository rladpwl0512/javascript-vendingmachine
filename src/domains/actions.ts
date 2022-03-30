import { CoinActionType, ModifyDetail, ProductActionType, Product } from '../abstracts/types';

export const createAction: object = (type: string, detail?: Product | ModifyDetail | string | number) => ({
  type,
  detail,
});

export const PRODUCT_ACTION: ProductActionType = {
  ADD: 'product-add',
  MODIFY: 'product-modify',
  DELETE: 'product-delete',
};

export const COIN_ACTION: CoinActionType = {
  COIN_CHARGE: 'coin-charge',
};
