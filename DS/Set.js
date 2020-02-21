// Set - array with no duplicate items, not in particular order.
////ES6 has built in Set object
//there's no size method in set.there's size property

//union, intersection and difference of 2 set
class mySet {
    constructor() {
        var collection = []
    }
    has = (element) => {
        return (collection.indexOf(element) == -1) // will output true if not exists
    }
    getValues = () => {
        return console.log(collection)
    }
    addElement = (element) => {
        if(collection.has(element)){
            collection.push(element)
            return true
        }
        return false
    }
  //  removeElement = ()


}