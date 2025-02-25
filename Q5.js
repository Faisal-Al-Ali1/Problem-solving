class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linklist {
    constructor() {
        this.head = null;
    }

    
    append(value) {
        const newNode = new node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    
    deleteMiddle() {
        if (!this.head || !this.head.next) {
            return null; 
        }

        let slow = this.head;
        let fast = this.head;
        let prev = null;

        
        while (fast !== null && fast.next !== null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        
        prev.next = slow.next;

        return this.head;
    }

    
    printList() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.value + " -> ";
            current = current.next;
        }
        console.log(output + "null");
    }
}


const lst = new linklist();
lst.append(1);
lst.append(2);
lst.append(3);
lst.append(4);
lst.append(5);

console.log("------------------------------------------------------------");
console.log("Q5 Original Linked List:");
lst.printList();

lst.deleteMiddle();

console.log("Q5 Linked List after deleting middle node:");
lst.printList();
