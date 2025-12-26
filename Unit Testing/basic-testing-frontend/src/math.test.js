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
