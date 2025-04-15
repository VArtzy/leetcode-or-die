function containsDuplicate(nums: number[]): boolean {
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true
        }
        map.set(nums[i], nums[i])
    }
    return false
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
