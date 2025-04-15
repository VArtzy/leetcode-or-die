function maxArea(height: number[]): number {
   let max = 0
   let i = 0
   let j = height.length - 1

   while(i < j) {
       const area = (j - i) * Math.min(height[i], height[j])
       max = Math.max(max, area)

       if (height[i] > height[j]) {
           j--
       } else {
           i++
       }
   }

   return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
