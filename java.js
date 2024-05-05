// Get user input for age 
let userAge = prompt("Enter your age:"); 

// Check if user is 18 or older 
if (userAge >= 18) {   
     console.log("You are old enough to drive."); 
    }
    else {    
        let yearsLeft = 18 - userAge;   
         console.log("You are left with " + yearsLeft + " years to drive.");
        }
// Compare ages 
let myAge = 25; // Assume my age is 25
 let yourAge = prompt("Enter your age:");
  if (myAge > yourAge) {   
     console.log("I am " + (myAge - yourAge) + " years older than you."); } 
     else if (myAge < yourAge) {    
        console.log("You are " + (yourAge - myAge) + " years older than me."); } 
        else {   
             console.log("We are the same age."); }
              // Using if...else and ternary operator to compare values 
              let a = 4;
               let b = 3;
                if (a > b) {  
                  console.log("a is greater than b"); }
                   else {    console.log("a is less than b"); }
                    // Using ternary operator
                     console.log(a > b ? "a is greater than b" : "a is less than b"); 
                     // Check if a number is even or odd 
                     let num = prompt("Enter a number:"); 
                     if (num % 2 === 0) {   
                         console.log(num + " is an even number"); }
                          else {    console.log(num + " is an odd number"); } 
                          // Grades for students
                          let score = prompt("Enter your score:"); 
                          if (score >= 80 && score <= 100) {   
                             console.log("A"); } 
                             else if (score >= 70 && score <= 89) {  
                                  console.log("B"); }
                                   else if (score >= 60 && score <= 69) 
