import { formData } from '../cartpage/PurchasePopUp';

describe('Purchase form Regexps tests', () => {
  it('Name must be at least 2 words, 3 letters each', () => {
    const name = 'Will Smith';
    expect(formData.name.reg.test(name)).toBe(true);
  });
  it('Name "WTF?" should not match', () => {
    const name = 'WTF?';
    expect(formData.name.reg.test(name)).toBe(false);
  });
});

describe('Purchase form Regexps tests', () => {
  it('Phonen number must start with "+" and be more than 9 numbers long', () => {
    expect('+123456789').toMatch(formData.phone.reg);
  });
  it('Phonen number must start with "+" and be more than 9 numbers long', () => {
    expect('abcdef').not.toMatch(formData.phone.reg);
  });
});

describe('FormData entries check', () => {
  it('FormData name key should have "reg" subkey', () => {
    expect(formData.name).toHaveProperty('reg');
  });
  it('FormData name key should NOT have "color" subkey', () => {
    expect(formData.name).not.toHaveProperty('color');
  });
});
