let arr04 = [-45, -1, -23, 57, 2, 3, 6, 1, 10, 8, 99, 100, 56, 42, 30, 22, 23]
let counter04 = 0

const bubbleSort = (arr04) => {
    for (i = 0; i < arr04.length; i++) {
        for (j = 0; j < arr04.length; j++) {
            if (arr04[j+1] < arr04[j]) {
                let tmp = arr04[j]
                arr04[j] = arr04[j+1]
                arr04[j+1] = tmp
            }
            counter04 += 1
        }  
    }
    return arr04
}

console.log(bubbleSort(arr04))
console.log('Counter = ', counter04)