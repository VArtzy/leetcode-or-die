function findMin(nums: number[]): number {
    let l = 0
    let r = nums.length - 1
    let res = nums[l]

    while (l < r) {
        if (nums[l] < nums[r]) { // menemukan bahwa salah satu subarray lebih kecil
            res = Math.min(res, nums[l])
            break
        }

        const m = Math.floor(l + (r - l) / 2)
        res = Math.min(res, nums[m])
        if (nums[m] >= nums[l]) { // elemen ditengah sama dengan / lebih besar dari elemen kiri
            l = m + 1
        } else {
            r = m - 1
        }
    }

    return res
};

console.log(findMin([3,4,5,1,2]))
