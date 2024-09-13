function longestChain(nums) {
  if (nums.length === 0) return 0;

  let longestChainLength = 1;
  let prevLongestChainLength = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    let currentNum = nums[i];
    let nextNum = nums[i + 1];

    if (currentNum + 1 === nextNum) {
      prevLongestChainLength += 1;
      if (longestChainLength < prevLongestChainLength)
        longestChainLength = prevLongestChainLength;
    } else {
      prevLongestChainLength = 1;
    }
  }

  return longestChainLength;
}

console.log(longestChain([1, 2, 3, 5, 6]));
