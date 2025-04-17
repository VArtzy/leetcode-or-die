function search(nums: number[], target: number): number {
   let l = 0
   let r = nums.length - 1

   while (l <= r) { 
       const m = Math.floor(l + (r - l) / 2)
       if (target === nums[m]) return m;

       if (nums[m] >= nums[l]) { // kiri
           if (target > nums[m] || target < nums[l]) { // pergi ke kanan
               l = m + 1
           } else { // stay di kiri
               r = m - 1
           }
       } else { // kanan
           if (target < nums[m] || target > nums[r]) { // pergi ke kiri
               r = m - 1
           } else { // stay di kanan
               l = m + 1
           }
       }
   }

   return -1
};

console.log(search([4,5,6,7,0,1,2], 0))
