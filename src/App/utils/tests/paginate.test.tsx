import { paginate } from '../paginate';

test('Pagination', () => {
  expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 1, 4)).toEqual([1, 2, 3, 4]);
  expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2, 4)).toEqual([5, 6, 7, 8]);
  expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3, 4)).toEqual([9, 10, 11, 12]);
  expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 1, 2)).toEqual([1, 2]);
  expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2, 2)).toEqual([3, 4]);
  expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3, 1)).toEqual([3]);
});
