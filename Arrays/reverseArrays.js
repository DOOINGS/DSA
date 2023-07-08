function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function reverseArray(array) {
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

const array = [1, 2, 3, 4, 5];

console.log("Original array:");
printArray(array);

reverseArray(array);

console.log("Reversed array:");
printArray(array);

