const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var funMaths = function (head) {
    var cur1=[]
    var cur2=[]
    var first = head;
    while(first!== null){
        Prime(first.data)
        first = first.next
    }
    function Prime(num){
        let sum=0
        for(let i=1;i<=num;i++){
            if(num%i==0){
                sum++;
            }
        }
        if(sum ==2){
            cur1.push(num)
        }else{
            cur2.push(num)
        }
    }
    let cur =[...cur1,...cur2];
    first=head;
    let i=0;
    while(first!==null){
        first.data=cur[i];
        first=first.next
        i++
    }
    return head
};
