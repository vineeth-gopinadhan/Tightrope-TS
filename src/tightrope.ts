
export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
      const width = right - left;
      const h = Math.min(height[left], height[right]);
      const area = width * h;
      maxArea = Math.max(maxArea, area);

      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }

  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1