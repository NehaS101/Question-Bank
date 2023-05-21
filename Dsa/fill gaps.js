const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var fillGaps = function (head) {
    var node = new LinkedListNode(0);
    var cur = node;
    var current = head;
    while(current != null && current.next != null){
        var sum = Math.abs(current.data-current.next.data);
        
        for(var i=current.data;i<current.data+sum;i++){
           cur.next = new LinkedListNode(i);
           cur=cur.next;
        }
        current=current.next;
        // console.log(sum)
    }
    cur.next = current;
    return node.next;
};
