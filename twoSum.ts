function twoSum(nums: number[], target: number): number[] {   
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i] // target = num + comp => comp = target - num

        const a = map.get(comp)
        if (typeof a === `number`) {
            return [a, i]
        }

        map.set(nums[i], i)
    }

    console.log(map)

    return []
}

console.log(twoSum([2, 7, 11, 15], 9))
