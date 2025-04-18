/**
 * Definition for singly-linked list.
 */
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const parent = new ListNode()
    let tail = parent

    while(list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }

    if (list1) {
        tail.next = list1
    } else if (list2) {
        tail.next = list2
    }

    return parent.next
};

function recursiveMergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) {
        return list2
    }
    if (!list2) {
        return list1
    }

    if (list1.val <= list2.val) {
        list1.next = recursiveMergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = recursiveMergeTwoLists(list1, list2.next)
        return list2
    }
}

console.log(mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(5)))))
