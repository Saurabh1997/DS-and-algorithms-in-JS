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
        else if(!collection.hasnot(element)){
            let index = collection.indexOf(element)
            collection.splice(index,1)
            return true
        }
        return false
    }

    union = (otherSet) => {
        var unionSet = new Set();
        var firstSet = this.getValues();
        var secondSet = otherSet.getValues();
        firstSet.array.forEach(element => {
            
        });



    }
  //  removeElement = ()


}
const Set = new mySet();
Set.addElement(5);
Set.getValues();