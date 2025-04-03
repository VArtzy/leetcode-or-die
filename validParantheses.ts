function isValid(s: string): boolean {
    const stack: string[] = []
    const map = {
        "}": "{",
        "]": "[",
        ")": "("
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            if (map[s[i]] === stack[stack.length - 1]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }

    return stack.length === 0
};
