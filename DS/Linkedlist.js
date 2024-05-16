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
  insertFirst = (data) => {
    this.head = new Node(data, this.head);
    this.size += 1;
  };
  //insert last node
  insertLast(data) {
    let current;
    //if empty, point node
    if (!this.head) {
      this.head = new Node(data);
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
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
    if (index > this.size && index > 0) {
      return null;
    }
    // if first index
    if (index == 0) {
      this.head = new Node(data, this.head); // same logic as that of insertFirst
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
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
  }

  //print data in linkedlist
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return null;
    } else {
      let current = this.head;
      let previous;
      let count = 0;
      //remove first
      if (index == 0) {
        this.head = current.next;
        this.size = this.size - 1;
      } else {
        while (count < index) {
          count++;
          previous = current; //node before the (to be removed) node
          current = current.next; // to be removed node
        }
        previous.next = current.next;
      }
    }
    this.size--;
  }

  //clear list
  clearList() {
    this.head = null;
    this.size = null;
  }
}

const li = new Linkedlist();
li.insertLast(100);
li.insertLast(200);
li.insertLast(300);
li.insertLast(400);
li.removeAt(2);
//const n1 = li.insertFirst(200);
//li.insertFirst(100);
//li.clearList();
li.printListData();
//li.getAt(1);
