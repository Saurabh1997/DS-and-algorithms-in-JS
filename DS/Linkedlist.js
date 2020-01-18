//Linear and ordered collection of data. elements are linked to each other with a pointer
// every node has data and has a reference to next element
//tail has reference to null

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first Node
    insertFirst(data) {
            this.head = new Node(data, this.head);
            this.size += 1;
        }
        //insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;
        //if empty, point node
        if (!this.head) {
            this.head = node
        } else {
            current = this.head

            while (current.next) {
                current = current.next;
            }
            current.next = node
        }
        this.size += 1;
        // let current = this.head;
        // while (current) {
        //     if (current.next == null) {
        //         current.next = new Node(data, null)
        //     }
        // }
    }

    //insert at index
    insertAt(data, index) {
        //if index out of bound
        if (index > this.size) {
            return;
        }
        // if first index
        if (index == 0) {
            this.head = new Node(data, this.head);
            this.size += 1;
        }
        let node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current; // node before index
            count++;

            current = current.next; //node after index            
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }

    //get at index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
    }

    //print data in linkedlist
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }

    //remove at index


    //clear list

}


const li = new Linkedlist();
li.insertFirst(100);
li.insertLast(200)
li.insertLast(300)
li.insertLast(400)
li.insertAt(10, 3);
//const n1 = li.insertFirst(200);
//li.insertFirst(100);
li.printListData();
//li.getAt(1);