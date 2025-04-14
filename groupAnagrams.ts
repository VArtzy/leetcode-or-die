/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs: string[]) {
   const map = {}

   for(let i = 0; i < strs.length; i++) {
       const wmap = new Array(26).fill(0)
       for (let j = 0; j < strs[i].length; j++) {
           wmap[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
       }

       const key = wmap.join(',')
       if (map[key] === undefined) {
           map[key] = []
       }
       map[key].push(strs[i])
   }
   
   return Object.values(map)
};


console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]))
