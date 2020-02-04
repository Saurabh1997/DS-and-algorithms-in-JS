//imagine a stack of books . topmost book is the one we've put last 
//LIFO - last in first out.. e.g is back button of browser
// stack.push - we push new links into stack as soon as another link is clicked.
//stack.pop - when we press the back button, it pops the recent link out of stack.
// stack functions : push - to add element on stack, pop - to remove top element and
// peek - to display top element, length - how many elements on stack.



// ***************Basic Stack using array functions*************

// var letters = [];
// var word = "racecara";
// var rword = "";
// for (var i = 0; i < word.length; i++) {
//     letters.push(word[i])
// }
// for (var j = 0; j < word.length; j++) {
//     rword += letters.pop()
// }
// console.log(rword)
// if (rword == word) {
//     console.log("its a palindrome")
// } else {
//     console.log("It's not")
// }
//*****************Stack implementation using class */
// var Stack = function() {

//     this.count = 0;
//     this.storage = {};


//     this.push = (value) => {
//         this.storage[this.count] = value;
//         this.count++;
//     }
//     this.pop = () => {
//         if (this.count == 0) {
//             return null;
//         }
//         this.count--;
//         var res = this.storage[this.count]
//         delete this.storage[this.count];
//         return res;
//     }
//     this.size = () => {
//         return this.count;
//     }
//     this.peek = () => {
//         return this.storage[this.count - 1];
//     }
// }
// var mySt = new Stack();
// mySt.push(20);
// mySt.push(10);
// mySt.push(9);
// mySt.push(1);
// console.log(mySt.storage);
// console.log(mySt.peek());

//--------------Using array
class Stack {
    constructor() {
        this.size = 0;
        this.storage = [];
    }

    push = (value) => {
        this.storage[this.size] = value;
        this.size++;
    }
    pop = () => {
        if (this.storage.length == 0) {
            return "array is empty";
        }
        var result = this.storage[this.size - 1];
        this.storage.splice(this.size - 1, 1);
        this.size--;
    }
    peek = () => {
        console.log(this.storage[this.size - 1]);
    }


    printStack = () => {
        console.log(this.storage);
    }

}
const mySt = new Stack();
mySt.push(10);
mySt.push(5);
mySt.pop()
mySt.printStack();