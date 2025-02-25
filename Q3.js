function summation(input) {

    if (input.length === 0) {
        return 0;
    }

    return input[0] + summation(input.slice(1));
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("------------------------------------------------------------"); 
console.log("Q3 Sum of array:", summation(numbers)); 
