
function deleteArray(array, index) {
  // Check if the index is valid.
  if (index < 0 || index >= array.length) {
    return;
  }

  // Shift all the elements after the index to the left.
  for (let i = index; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }

  // Decrease the length of the array by 1.
  array.length -= 1;
}

const array = [1, 2, 3, 4, 5];

// Delete the element at index 2.
deleteArray(array, 2);

console.log(array); // [1, 2, 4, 5]

deleteArray(array, 3)

console.log(array); // [1, 2, 4]

deleteArray(array, 0)




