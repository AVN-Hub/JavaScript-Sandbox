import {it, expect } from'vitest';
import { extractNumbers } from './parser';

it('Should extract numbers from FormData', () => {
    const mockData = new Map();
    mockData.set("num1", 10);
    mockData.set("num2", 20);
    expect(extractNumbers(mockData)).toEqual([10, 20]);
});