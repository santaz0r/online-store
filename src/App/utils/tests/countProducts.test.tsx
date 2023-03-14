import countProducts from '../countProducts';
import productsTest from './data';

test('Count products', () => {
  expect(countProducts(productsTest, 'category')).toStrictEqual({ smartphones: 5, laptops: 5 });
  expect(countProducts(productsTest, 'brand')).toStrictEqual({
    Apple: 2,
    Samsung: 2,
    OPPO: 1,
    Huawei: 1,
    APPle: 1,
    'Microsoft Surface': 1,
    Infinix: 1,
    'HP Pavilion': 1,
  });
});
