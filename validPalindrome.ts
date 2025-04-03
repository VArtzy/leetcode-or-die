function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "").replace(/ /g, "")
    let h = 0
    let t = s.length - 1
    while (h < t) {
        if (s[h] !== s[t]) return false
        h++
        t--
    }
    return true
};
