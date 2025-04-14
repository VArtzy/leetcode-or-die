function longestConsecutive(nums: number[]): number {
    const set = new Set<number>(nums)
    let longest = 0

    for (const num of set) {
        if (!set.has(num - 1)) {
            let len = 0
            while (set.has(num + len)) {
                len++
            }
            longest = Math.max(longest, len)
        }
    }

    return longest
};

console.log(longestConsecutive([100,4,200,1,3,2]))
