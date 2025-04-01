class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null && l2 === null) return null
    let l = new ListNode(0)
    let c = l
    let carry = 0

    while (l1 !== null && l2 !== null) {
        const c1 = l1?.val ? l1.val : 0
        const c2 = l2?.val ? l2.val : 0

        const sum = c1 + c2 + carry
        carry = Math.floor(sum / 10)
        c.next = new ListNode(sum % 10)
        c = c.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    return l.next
}

//function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//    if (l1 === null || l2 === null) return null
//
//    let num = 1
//
//    let num1 = 0
//    while(l1.next) {
//        num1 += num * l1.val
//        num *= 10
//        l1 = l1.next
//    }
//    num1 += num * l1.val
//    num = 1
//
//    let num2 = 0
//    while(l2.next) {
//        num2 += num * l2.val
//        num *= 10
//        l2 = l2.next
//    }
//    num2 += num * l2.val
//
//    let num3 = num1 + num2
//    num = 10
//    const arr: number[] = []
//    while(num <= num3) {
//        arr.push(Math.floor(num3 % num / (num / 10)))
//        num *= 10
//    }
//    arr.push(Math.floor(num3 % num / (num / 10)))
//    console.log(num3, arr)
//
//    const ll = new ListNode(arr[0])
//    let l = ll
//    for (let i = 1; i < arr.length; i++) {
//        l.next = new ListNode(arr[i])
//        l = l.next
//    }
//
//    return ll
//}

const l1 = new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))))))))))))))))))))))))))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

console.log(addTwoNumbers(l1, l2))
