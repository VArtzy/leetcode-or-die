function minWindow(s: string, t: string): string {
    if (t === "") return ""

    let countT = {}
    let window = {}

    for (let c of t) {
        countT[c] = (countT[c] || 0) + 1
    }

    let have = 0
    let need = Object.keys(countT).length // only count unique key (count the count hashmap)
    let res = [-1, -1]
    let resLen = Infinity
    let l = 0

    for (let r = 0; r < s.length; r++) {
        const c = s[r]
        window[c] = (window[c] || 0) + 1

        if (countT[c] && countT[c] === window[c]) {
            have++
        }

        while (have === need) { // valid substring
            const winLen = r - l + 1
            if (winLen < resLen) { // get lowest length window
                resLen = winLen
                res = [l, r]
            }

            window[s[l]]--
            if (countT[s[l]] && countT[s[l]] > window[s[l]]) { //check valid sliding then dec have
                have--
            }
            l++
        }
    }

    return s.substring(res[0], res[1] + 1)
};

console.log(minWindow("x", "xy"))
