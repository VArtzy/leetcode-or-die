function romanToInt(s: string): number {
    const roman = new Map()
    roman.set(`I`, 1)
    roman.set(`V`, 5)
    roman.set(`X`, 10)
    roman.set(`L`, 50)
    roman.set(`C`, 100)
    roman.set(`D`, 500)
    roman.set(`M`, 1000)

    let counter = 0

    for (let i = 0; i < s.length; i++) {
        const p1 = roman.get(s[i])
        const p2 = roman.get(s[i + 1])
        if (i + 1 < s.length && p1 > p2) {
            counter -= p1
        } else {
            counter += p1
        }
    }

    return counter
};

console.log(romanToInt(`III`))
