let data = [1,5, 7, 1, 1, 2, 2, 4, 3, 9, 10];

for (let i = 0; i < data.length; i++) {
    let minIndex = i;
    //Compare Value
    for (let j = i + 1; j < data.length; j++) {
        if (data[j] < data[minIndex]) {
            minIndex = j;
        }
    }

   //Swap Value
    if (minIndex !== i) {
        let temp = data[i];
        data[i] = data[minIndex];
        data[minIndex] = temp;
    }
}

console.log(data);
