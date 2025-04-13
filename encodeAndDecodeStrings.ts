function encode(strs: string[]) {
   let str = "" 
   for (let i = 0; i < strs.length; i++) {
       str += strs[i].length + ':' + strs[i]
   }
   return str
}

function decode(str: string) {
    const res: string[] = []
    let i = 0
    while (i < str.length) {
        let j = i
        if (str[j] !== ':') {
            j++
        }
        const len = parseInt(str[j - 1])
        i = j + 1
        j = i + len
        res.push(str.substring(i, j))
        i = j
    }
    return res
}

console.log(decode(encode(["neet","code","love","you"])))
console.log(decode(encode(["we","say",":","yes"])))
