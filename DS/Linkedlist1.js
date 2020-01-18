class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class Linkedlist {
    constructor() {
        this.head = null;
    }
    insert(data, next = null) {
        this.head = new Node(data, null)
    }


}