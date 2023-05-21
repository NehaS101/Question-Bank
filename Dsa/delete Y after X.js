
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var deleteXAfterY = function(head, n, x, y) {
    var first = head;
    while(first){
        var pre = 1
        var post = first
        while(pre<x && post.next){
            post = post.next
            pre++
        }
        var last =0
        var res = post.next
        while(last<y && res){
            res = res.next
            last++
        }
        post.next = res
        first = res
    }
    return head
};

