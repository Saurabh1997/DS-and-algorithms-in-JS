
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
        return console.log(collection)
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
        console.log(firstSet)
        var secondSet = otherSet.getValues(); // 4,6,8
        firstSet.forEach((element) => {
            if(this.hasnot(element)) {
                unionSet.push(element)  // will push elements from only first array
            }
           });
        secondSet.forEach((element) => {
            if(this.hasnot(element)) {  // will look for elements already  entered 
                unionSet.push(element)  //push elements from second array
            }
        })
        return true
    }


    interSection = (otherSet) => {
        var unionSet = new Set();
    }
  //  removeElement = ()


}
const nSet = new mySet();
nSet.addElement(5);
nSet.addElement(9);
nSet.addElement(3);
nSet.addElement(2);
nSet.addElement(6);
var arr = [2,4,5,6]
nSet.union(arr)
