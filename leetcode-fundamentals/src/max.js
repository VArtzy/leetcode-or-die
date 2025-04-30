const maxValue = (nums) => {
  let max = nums[0]
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  return max
}

export default maxValue
