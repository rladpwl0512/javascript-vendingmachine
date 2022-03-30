import ProductStoreInstance from '../domains/stores/ProductStore';
import { createAction, PRODUCT_ACTION } from '../domains/actions';

describe('상품을 관리할 수 있다.', () => {
  const findProduct = (newProduct) => {
    return ProductStoreInstance.products.find((product) => product.name === newProduct.name);
  }

  test('최초 상품 목록은 비워진 상태이다.', () => {
    expect(ProductStoreInstance.products).toHaveLength(0);
  });

  test('상품을 추가할 수 있다.', () => {
    const newProduct = {
      name: '김위니',
      price: 51200,
      quantity: 25,
    };

    ProductStoreInstance.updateProducts(createAction(PRODUCT_ACTION.ADD, newProduct));

    expect(findProduct(newProduct)).toBe(newProduct);
  });

  test('상품 정보를 수정할 수 있다.', () => {
    const product = {
      name: '이티거',
      price: 50800,
      quantity: 23,
    };
    const oldProductName = product.name;
    const newProductInfo = {
      name: '이다예',
      price: 50800,
      quantity: 23,
    };
    
    ProductStoreInstance.updateProducts(createAction(PRODUCT_ACTION.ADD, product));
    ProductStoreInstance.updateProducts(createAction(PRODUCT_ACTION.MODIFY, { oldProductName, newProductInfo }));

    expect(findProduct(product)).toBe(undefined);
    expect(findProduct(newProductInfo)).toBe(newProductInfo);
  });

  test('상품을 삭제할 수 있다.', () => {
    const product = {
      name: '로이 율리',
      price: 10000,
      quantity: 70,
    };
    
    ProductStoreInstance.updateProducts(createAction(PRODUCT_ACTION.ADD, product));
    ProductStoreInstance.updateProducts(createAction(PRODUCT_ACTION.DELETE, product.name));

    expect(ProductStoreInstance.products).toHaveLength(2);
  });
});
