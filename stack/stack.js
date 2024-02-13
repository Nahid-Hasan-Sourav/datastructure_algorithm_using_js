// define array size
const arraySize = 3;

// declare a stack as an array
let stack = [];

// variable to track the top of the stack
let top = -1;

// Define the pushArray function
function pushArray(item) {
    top = top + 1;
    // Check if the stack is not full
    if (top < arraySize) {
        stack[top] = item;
        return stack;
    } else {
        console.log("Array size is 3 [0, 1, 2]. Cannot push more items.");
    }
}

// Testing the pushArray function
console.log("Testing ");
console.log(pushArray(3));
console.log(pushArray(3));
console.log(pushArray(3));
console.log(pushArray(3));
console.log(stack);
