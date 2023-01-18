const arr1 = [1, 2, 3, 5, 6, 9, 2, 6, 4, 10]
let counter = 0

const LinearSearch = (arr1, item) => {
    for (i=0; i < arr1.length; i++) {
        counter += 1
        if (arr1[i] === item) {
            return i
        }
    }
    return null
}

console.log(LinearSearch(arr1, 6), "It is a linear search");
console.log("Counter = ", counter);