import { maxArea } from './tightrope';

const testCases = [
  {
    input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    expectedOutput: 49,
  },
  {
    input: [1, 1],
    expectedOutput: 1,
  },
  {
    input: [3, 9, 3, 4, 7, 2, 12, 6],
    expectedOutput: 45,
  },
  {
    input: [4, 8, 5, 2, 1, 8, 3, 7],
    expectedOutput: 42,
  },
  {
    input: [1, 2, 1, 3, 4, 5, 4, 2, 1],
    expectedOutput: 12,
  }
];

testCases.forEach(({ input, expectedOutput }, index) => {
  it(`Test Case ${index + 1}: should calculate the maximum area for given heights`, () => {
    expect(maxArea(input)).toBe(expectedOutput);
  });
});