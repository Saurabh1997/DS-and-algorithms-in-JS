// Set - array with no duplicate items, not in particular order.
////ES6 has built in Set object
//there's no size method in set.there's size property

//union, intersection and difference of 2 set
function mySet() {
  var collection = [];

  this.hasnot = (element) => {
    return collection.indexOf(element) == -1; // will output true if not exists
  };
  this.getValues = () => {
    return collection;
  };
  this.addElement = (element) => {
    if (this.hasnot(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  this.removeElement = (element) => {
    if (collection.length == 0) {
      return false;
    } else if (!this.hasnot(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.union = (otherSet) => {
    var unionSet = new Set();

    var firstSet = this.getValues(); // 2,4,6
    var secondSet = otherSet.getValues(); // 4,6,8
    firstSet.forEach((element) => {
      unionSet.add(element); // will push elements from only first array
    });
    secondSet.forEach((element) => {
      unionSet.add(element); //will look for elements already entered
      // push elements from second array
    });
    return unionSet;
  };

  //   //intersection
  this.intersection = (otherSet) => {
    var interSet = new Set();
    var firstSet = this.getValues();
    var secondSet = otherSet.getValues();
    firstSet.forEach((element) => {
      if (!otherSet.hasnot(element)) {
        interSet.add(element);
      }
    });
    return interSet;
  };
  //   // difference

  this.difference = (otherSet) => {
    var diffSet = new Set();
    var firstSet = this.getValues();

    firstSet.forEach((element) => {
      // firstSet - secondSet = first set - intersection
      if (otherSet.hasnot(element)) {
        diffSet.add(element);
      }
    });
    return diffSet;
  };

  //   //if set is subset of different set

  //   this.subset = (otherSet) => {
  //     var firstSet = this.getValues();
  //     return firstSet.every((element) => {
  //       // Every func - whether all elements in array pass the test provided.
  //        //executes for every element of first array, but doesn't
  //       return !otherSet.hasnot(element); // affect original array
  //     });
  //   };
  this.subset = (otherSet) => {
    var firstSet = this.getValues();
    firstSet.every((element) => {
      return !otherSet.hasnot(element);
    });
  };
}

var nSet1 = new mySet();
var nSet2 = new mySet();
var nSet3 = new mySet();
nSet1.addElement(5);
nSet1.addElement(9);
nSet1.addElement(3);
nSet1.addElement(2);
nSet1.addElement(1);
nSet2.addElement(6);
nSet2.addElement(5); //same
nSet2.addElement(9); //same
nSet2.addElement(3); //same
nSet3.addElement(5);
nSet3.addElement(1);
console.log(nSet1.getValues());
console.log(nSet2.getValues());
console.log(nSet3.getValues());
console.log(nSet1.union(nSet2));
console.log(nSet1.intersection(nSet2));
console.log(nSet1.difference(nSet2));

console.log(nSet3.subset(nSet1));
