### Concatenation of Array

## QUESTION
Concatenation of Array
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

 

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]




### SOLUTION 
``` 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return [...nums,...nums]
     
 };
 
 const result=getConcatenation([1,2,1])

```


## Time Complexity
Input Size: Let 𝑛n be the length of the nums array.

Operation: The operation return [...nums, ...nums]; creates a new array by concatenating the nums array with itself.

The spread operator ...nums iterates over the entire array and adds each element to the new array. Since we are doing this twice (...nums, ...nums), it effectively iterates over 2 * n elements.
Time Complexity: The time complexity is 𝑂(𝑛)
O(n) for copying each element of nums twice, leading to 𝑂(2𝑛)
O(2n). Since constants are dropped in Big-O notation, the time complexity is 𝑂(𝑛)
O(n).

## Space Complexity
Space Complexity: The space complexity involves considering the space needed to store the result.

The original array nums has size 𝑛n.
The new array created by concatenating nums with itself will have a size of 2n.
Since we are returning a new array with double the size of the original, the space complexity is 
𝑂(2𝑛)
O(2n). Again, dropping the constant factor, the space complexity is O(n).

Summary
Time Complexity: 𝑂(𝑛)

Space Complexity: 𝑂(𝑛)

Both time and space complexities are linear with respect to the size of the input array nums.