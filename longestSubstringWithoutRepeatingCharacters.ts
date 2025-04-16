function lengthOfLongestSubstring(s: string): number {
    const charSet = new Set()
    let j = 0
    let length = 0

    for(let i = 0; i < s.length; i++) {
        while (charSet.has(s[i])) {
            charSet.delete(s[j])
            j++
        }
        charSet.add(s[i])
        length = Math.max(length, i - j + 1)
    }

    return length
};

console.log(lengthOfLongestSubstring("pwwkew"))
