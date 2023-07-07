const arr = ["peace", "david", "Jesus", 1, 2, 6]
const array = [0, 4, 23, "pig", "korea"]

//add an item  to the beginning of an array
arr.unshift(0)

//add an item to the end of an array
arr.push(9)

//remove the item at the first index
arr.shift()

//remove an item at the end of the array
arr.pop()

//find the length of an array
// arr.len()
// arr.len(7)

//to get the index of a particular item
arr.indexOf(2)

//to add or remove any element in an array
arr.splice(1)
arr.splice("ode")



//to print all items in an array
//also testing the concatenation of two arrays
for(const item of arr) {
  arr.concat(second)
  console.log(item)
}