const arr5 = [1, 4, 6, 2, 1, 7, 9, 11, 10, 8, 0, 24, 12, 56, 13, 15, 14, 18, 17, 19, 3, 5];
let count5 = 0

const quickSort = (arr5, item) => {
    if (arr5.length <= 1) {
        return arr5;
    };
    let pivotIndex = Math.floor(arr5.length / 2);
    let pivot = arr5[pivotIndex];
    let less = [];
    let greatest = [];
    for (i = 0; i < arr5.length; i++) {
        count5 += 1
        if (arr5[i] === pivot) continue
        if (arr5[i] < pivot) {
            less.push(arr5[i])
        } else {
            greatest.push(arr5[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greatest)]
}

console.log(quickSort(arr5))
console.log(count5)