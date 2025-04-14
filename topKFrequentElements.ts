/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
   const map = new Map()
   for(let i = 0; i < nums.length; i++) {
       if(!map.has(nums[i])) map.set(nums[i], 0)
       map.set(nums[i], map.get(nums[i]) + 1)
   }

   const arr = new Array(nums.length + 1)
   for (let i = 0; i < arr.length; i++) {
       arr[i] = []
   }
   for (const kv of map) {
       arr[kv[1]].push(kv[0])
   }

   const res = []
   for (let i = arr.length - 1; i >= 0; i--) {
       for (let j = 0; j < arr[i].length; j++) {
           res.push(arr[i][j])
           if (res.length === k) return res
       }
   }
};

console.log(topKFrequent([1, 2], 2))
