import { countDiscountPercent } from '../cartpage/CartSummary';

describe('CartSummary discounts check #1', () => {
  test('Count discount function should return something', () => {
    expect(countDiscountPercent([])).toBeDefined();
  });
});

describe('CartSummary discounts check #2', () => {
  it('2 added discount codes (RSS and TS) should give 40% discount', () => {
    expect(countDiscountPercent(['RSS', 'TS'])).toBe(40);
  });
  it('1 added discount code (RSS) should give 10% discount', () => {
    expect(countDiscountPercent(['RSS'])).toBe(10);
  });
  it('0 added discount codes should give 0% discount', () => {
    expect(countDiscountPercent([])).toBe(0);
  });
});
