import quickSort from '../quickSort';
import productsTest from './data';

test('Quick Sort', () => {
  expect(quickSort(productsTest, 'stock')).toStrictEqual([...productsTest.sort((a, b) => a.stock - b.stock)]);
  expect(quickSort(productsTest, 'price')).toStrictEqual([...productsTest.sort((a, b) => a.price - b.price)]);
});
