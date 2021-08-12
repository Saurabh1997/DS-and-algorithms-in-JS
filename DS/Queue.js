function Queue() {
  collection = [];
  this.print = () => {
    console.log(collection);
  };
  this.enqueue = (element) => {
    collection.push(element);
  };
  this.dequeue = () => {
    return collection.shift();
  };
  this.front = () => {
    return collection[0];
  };
  this.size = () => {
    return collection.length;
  };
  this.isEmpty = () => {
    return collection.length === 0;
  };
}

class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  print = () => {
    console.log(this.collection);
  };
  dequeue = () => {
    var value = this.collection.shift();
    return value[0];
  };
  size = () => {
    return this.collection.length;
  };
  isEmpty = () => {
    return this.collection.length == 0;
  };
  havenot = (element) => {
    let has = false;
    this.collection.forEach((element1) => {
      if (element1[0] == element) {
        has = true;
        return has;
      }
    });
    return has;
  };
  enqueue = (element) => {
    // let added = true;
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      for (let i = 0; i <= this.collection.length - 1; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          break;
        }
      }
      if (!this.havenot(element[0])) {
        //console.log(this.havenot(element));
        this.collection.push(element);
      }
    }
  };
  //function to call out any element n remove it
}
const que = new PriorityQueue();
que.enqueue(["saurabh", 3]);
que.enqueue(["gaurav", 5]);
que.enqueue(["sachin", 2]);
que.enqueue(["rit", 1]);
que.enqueue(["webi", 6]);
que.enqueue(["tech", 2]);
que.print();
