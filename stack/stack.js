// define array size for fixed the array
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

//remove or delete an element from stack
function popArray(){
    if(top >= 0){
        let removeTopElemet = stack[top];
        top = top-1;
        return removeTopElemet;

    }
    else{
        console.log("Array size is greaterThan");
    }
}




//if there is any item on stack we will return the value of top element
function peek(){
   
    if(top>=0){
       if(top===arraySize){
        return stack[top-1];
       }
       else{
        return stack[top-1];
       }
    }
    else{
        return "There is no elemnt on stack"
    }
}

// Testing the pushArray function
console.log("value of peek",peek());
console.log(pushArray(1));
console.log(pushArray(2));
console.log(pushArray(3));
console.log(pushArray(3));
console.log("value of peek",peek());
console.log("START POP HERE ");
console.log("value of POP",popArray());
console.log("value of POP",popArray());
console.log("value of POP",popArray());

console.log("value of STACK",stack);

// console.log(stack);
