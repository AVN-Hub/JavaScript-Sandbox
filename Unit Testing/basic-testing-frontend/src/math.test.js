import {it, expect } from'vitest';
import {add} from'./math';

it('Should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2, 3];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((sum, num) => sum + num, 0);
    expect(result).toBe(expectedResult);
});

it('Should yield NaN if  a non-number is present in the array', () => {
    // Arrange
    const numbers = [1, 'invalid'];

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {

    // Arrange
    const numbers = ['1', '2'];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((sum, num) => sum + Number(num), 0);
    expect(result).toBe(expectedResult);
});

it('Should return 0 for an empty array', () => {
    // Arrange
    const numbers = [];

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(0);
});

it('Should throw an error if no argument is provided', () => {
    // Arrange
    const resultFn=() => add();
    // Act & Assert
    expect(resultFn).toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
    // Arrange
    const resultFn = () => add(1, 2, 3);
    // Act & Assert
    expect(resultFn).toThrow(/is not iterable/);
});