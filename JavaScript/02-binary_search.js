let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let count = 0

// Бинарный поиск с помощью итерации

const BinarySearch = (arr2, item) => {
    let start = 0
    let end = arr2.length 
    let middle;
    let found = false
    let position = -1
    while (found === false && start <= end) {
        middle = Math.floor((start + end) / 2)
        count += 1
        if (arr2[middle] === item) {
            found = true
            position = middle
            return position
        }
        if (item < arr2[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}

console.log(BinarySearch(arr2, 6), 'It is a binary search')
console.log("Counter = ", count)