
// Set - array with no duplicate items, not in particular order.
////ES6 has built in Set object
//there's no size method in set.there's size property

//union, intersection and difference of 2 set
function mySet() {
    
         var collection = []

    this.hasnot = (element) => {
        return (collection.indexOf(element) == -1) // will output true if not exists
    }
    this.getValues = () => {
        return collection
    }
    this.addElement = (element) => {
        if(this.hasnot(element)){
            collection.push(element)
            return true
        }
        return false
    }
    this.removeElement = (element) => {
        if(collection.length == 0) {
            return false
        }
        else if(!this.hasnot(element)){
            let index = collection.indexOf(element)
            collection.splice(index,1)
            return true
        }
        return false
    }

    this.union = (otherSet) => {
        var unionSet = new Set();
        
        var firstSet = this.getValues();  // 2,4,6
        var secondSet = otherSet.getValues(); // 4,6,8
        firstSet.forEach((element) => {
                unionSet.add(element)  // will push elements from only first array          
           });
        secondSet.forEach((element) => {                                     
                unionSet.add(element) //will look for elements already entered
                // push elements from second array         
        })
        return unionSet
    }

//intersection
    this.interSection = (otherSet) => {
        var interSet = new Set();
        var firstSet = this.getValues();
        var secondSet = otherSet.getValues();
        firstSet.forEach((element) => {
           if(!otherSet.hasnot(element)){
            interSet.add(element)
           }
        })
        return interSet
    }
  // difference

  this.difference = (otherSet) => {
    var diffSet = new Set();
    var firstSet = this.getValues();
    var otherSet = this.getValues();

    firstSet.forEach((element)=> {// firstSet - secondSet = first set - intersection
        if(otherSet.hasnot(element)){
            diffSet.add(element);
        }
    })
    return diffSet
  }

//if set is subset of different set

  this.subset = () => {

  }


}
const nSet1 = new mySet();
const nSet2 = new mySet();
nSet1.addElement(5);
nSet1.addElement(9);
nSet1.addElement(3);
nSet1.addElement(2);
nSet2.addElement(6);   
nSet2.addElement(5); //same
nSet2.addElement(9); //same
nSet2.addElement(3); //same
console.log(nSet1.getValues())
console.log(nSet2.getValues())

console.log(nSet1.union(nSet2))
console.log(nSet1.interSection(nSet2))
console.log(nSet1.difference(nSet2))
