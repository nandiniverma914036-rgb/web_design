/ 1. Write a program to perform arithmetic
// operations on two numbers.
// ==========================================

let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);


// ==========================================
// 2. Write a program to compare two numbers
// using comparison operators.
// ==========================================

let num1 = 10;
let num2 = 5;

console.log("Greater than:", num1 > num2);
console.log("Less than:", num1 < num2);
console.log("Equal:", num1 == num2);
console.log("Not equal:", num1 != num2);
console.log("Greater than or equal:", num1 >= num2);
console.log("Less than or equal:", num1 <= num2);


// ==========================================
// 3. Write a program to demonstrate logical
// operators (&&, ||, !).
// ==========================================

let x = 10;
let y = 5;

console.log(x > 5 && y < 10);
console.log(x > 15 || y < 10);
console.log(!(x > y));


// ==========================================
// 4. Write a program to check whether a
// number is positive.
// ==========================================

let number = 10;

if (number > 0) {
    console.log("Positive number");
} else {
    console.log("Not a positive number");
}


// ==========================================
// 5. Write a program to check whether a
// number is even or odd.
// ==========================================

let n = 7;

if (n % 2 == 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// ==========================================
// 6. Write a program to check voting
// eligibility using if-else.
// ==========================================

let age = 20;

if (age >= 18) {
    console.log("Eligible for voting");
} else {
    console.log("Not eligible for voting");
}


// ==========================================
// 7. Write a program to check whether a
// number is positive, negative, or zero.
// ==========================================

let value = -5;

if (value > 0) {
    console.log("Positive number");
} else if (value < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}


// ==========================================
// 8. Write a program to calculate grades
// based on marks using else-if.
// ==========================================

let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 40) {
    console.log("Grade D");
} else {
    console.log("Fail");
}


// ==========================================
// 9. Write a program to find the largest
// of two numbers.
// ==========================================

let first = 20;
let second = 15;

if (first > second) {
    console.log(first, "is largest");
} else if (second > first) {
    console.log(second, "is largest");
} else {
    console.log("Both numbers are equal");
}


// ==========================================
// 10. Write a program to check whether a
// year is a leap year.
// ==========================================

let year = 2024;

if (
    year % 400 == 0 ||
    (year % 4 == 0 && year % 100 != 0)
) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}


// ==========================================
// 11. Write a program to print numbers
// from 1 to 10 using a for loop.
// ==========================================

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// ==========================================
// 12. Write a program to print the
// multiplication table of a given number.
// ==========================================

let table = 5;

for (let i = 1; i <= 10; i++) {
    console.log(table + " x " + i + " = " + (table * i));
}


// ==========================================
// 13. Write a program to calculate the sum
// of the first N natural numbers.
// ==========================================

let limit = 10;
let sum = 0;

for (let i = 1; i <= limit; i++) {
    sum = sum + i;
}

console.log("Sum =", sum);


// ==========================================
// 14. Write a program to print all even
// numbers between 1 and 50.
// ==========================================

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}


// ==========================================
// 15. Write a program to count numbers
// divisible by 3 between 1 and 100.
// ==========================================

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        count++;
    }
}

console.log("Count =", count);


// ==========================================
// 16. Write a program to find the largest
// of three numbers.
// ==========================================

let p = 10;
let q = 25;
let r = 15;

if (p >= q && p >= r) {
    console.log(p, "is largest");
} else if (q >= p && q >= r) {
    console.log(q, "is largest");
} else {
    console.log(r, "is largest");
}


// ==========================================
// 17. Write a program to check whether a
// number is divisible by both 3 and 5.
// ==========================================

let num = 15;

if (num % 3 == 0 && num % 5 == 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}


// ==========================================
// 18. Write a program to calculate the
// factorial of a number using a for loop.
// ==========================================

let factorialNumber = 5;
let factorial = 1;

for (let i = 1; i <= factorialNumber; i++) {
    factorial = factorial * i;
}

console.log("Factorial =", factorial);


// ==========================================
// 19. Write a program to print numbers
// from 50 to 1 in reverse order.
// ==========================================

for (let i = 50; i >= 1; i--) {
    console.log(i);
}

// 20. Write a program to calculate the sum
// of all odd numbers between 1 and 100.


let oddSum = 0;

for (let i = 1; i <= 100; i += 2) {
    oddSum = oddSum + i;
}

console.log("Sum of odd numbers =", oddSum);