function isPalindrome(x: number): boolean {
    if (x >= 0 && x < 10) return true
    const nums = getNum(x)
    const nums2: number[] = []
    let p1 = 0
    let p2 = nums.length - 1

    if (nums[p1] === 0) return false
    while(p1 < p2) {
        if (nums[p2] / nums[p1] === 0) {
            return false
        }
        if (nums[p1] !== 0) {
            nums2.push(nums[p2] / nums[p1])
        }
       p1++
       p2--
    }

   if (nums2.length === 0) return false
   return nums2.reduce((prev, curr) => curr + prev) % 10 === 0
}

function getNum(x: number): number[] {
    const nums: number[] = []
    let num = 10
    let s = 0
    while (s < x) {
        nums.push(x % num - s)
        s = x % num
        num = num * 10
    }
    return nums
}

console.log(isPalindrome(121))
