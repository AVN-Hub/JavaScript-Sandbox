import {it, expect } from'vitest';
import {add} from'./math';

it('Should summarize all number values in an array', () => {
  const result = add([1, 2, 3, 4, 5]);
  expect(result).toBe(15);
});
