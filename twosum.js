let arr = [2, 5, 7, 8, 9]
let target = 10

let ChecktwoSum = (arr, target) => {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (target - arr[i] == arr[j]) {

                return [arr[i], arr[j]]

            }

        }
    }
}

console.log(ChecktwoSum(arr, target));