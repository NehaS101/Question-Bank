
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    let cur1 = head;
    if(head.next == null){
        head.data += 1;
        return head
    }
    let cur2 = head;
    while(cur2.next !== null){
        if(cur2.data !== 9){
            cur1 = cur2;
        }
        cur2 = cur2.next
    }
    if(cur2.data === 9 && cur1 !==null){
        cur2 = cur1;
        cur2.data += 1;
        cur2 = cur2.next;
        while(cur2 !== null){
            cur2.data =0;
            cur2 = cur2.next
        }
    }else{
        cur2.data += 1;
    }
    return head;
};

