let arr3 = [-45, -1, -23, 57, 2, 3, 6, 1, 10, 8, 99, 100, 56, 42, 30, 22, 23]
let meter = 0

const selectionSort = (arr3) => {
    for (i = 0; i < arr3.length; i++) {
        let indexMin = i
        for (j = i+1; j < arr3.length; j++) {
            if (arr3[j] < arr3[indexMin]) {
                indexMin = j
            }
            meter += 1
        }
        let tmp = arr3[i]
        arr3[i] = arr3[indexMin]
        arr3[indexMin] = tmp
    }
    return arr3
}


console.log(selectionSort(arr3))
console.log('Counter = ', meter)