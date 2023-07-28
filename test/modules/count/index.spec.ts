import { expect, test } from 'vitest';
import { countSum } from '../../../src';

test('deepOmitNil', () => {
  expect(countSum(10, 10)).toBe(20);
});
