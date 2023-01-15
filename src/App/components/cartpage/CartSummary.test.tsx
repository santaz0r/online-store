import { countDiscountPercent } from './CartSummary';
// const countDiscountPercent = require('./CartSummary');

describe('sum module', () => {
  it('Description', () => {
    expect(countDiscountPercent(['RSS', 'TS'])).toBe(40);
    expect(countDiscountPercent(['RSS'])).toBe(10);
  });
});
