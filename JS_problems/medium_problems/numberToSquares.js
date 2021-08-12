//  O (N**2)  - complexity as it array.indexOf also has O(N). so Nested loop
const isSquares = (nums, squrs) => {
    if(nums.length !== squrs.length) return false
    for(let i = 0;i< nums.length;i++){
        let sqrs = squrs.indexOf(nums[i] ** 2)
        if(sqrs === -1){
            return false
        }
        squrs.splice(sqrs,1)
        console.log("hello",sqrs,squrs)
    }
    return true    
}




let nums = [1,3,2] // can be repeating
let squrs = [1,4,9] // can be repeating 

console.log(isSquares(nums,squrs), "Equal")