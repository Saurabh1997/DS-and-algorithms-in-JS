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
    insertFirst(data, next = null) {
        this.head = new Node(data)
        this.size++;
    }
    insertLast

}