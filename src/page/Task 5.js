function countSmaller(nums) {
  let count = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count[i] += 1;
      }
    }
  }
  return count;
}

console.log(countSmaller([5, 1, 2, 6, 2]));
