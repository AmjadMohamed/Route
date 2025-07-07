// 1- Write a program that allow to user enter number then print it 

// var num = Number(window.prompt("Enter Any Number"));
// window.alert(num);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no 

// var num = Number(window.prompt("Enter Any Number"));
// if(num % 3 == 0)
// {
//     window.alert("YES");
// }
// else
// {
//     window.alert("NO");
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3- Write a program that allows the user to insert 2 integers then print the max 

// var num1 = Number(window.prompt("Enter first number"));
// var num2 = Number(window.prompt("Enter second number"));
// if (num1 > num2) 
// {
//     window.alert(num1);
// }
// else 
// {
//     window.alert(num2);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4-Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive. 

// var num = Number(window.prompt("Enter any number"));
// if(num < 0)
// {
//     window.alert("Negative");
// }
// else
// {
//     window.alert("Positive");
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5- Write a program that take 3 integers from user then print the max element and the min element. 

// var num1 = Number(window.prompt("Enter first number"));
// var num2 = Number(window.prompt("Enter second number"));
// var num3 = Number(window.prompt("Enter third number"));

// var max = num1;
// var min = num1;

// if (num2 > max) 
// {
//     max = num2;
// }
// if (num3 > max) 
// {
//     max = num3;
// }

// if (num2 < min) 
// {
//     min = num2;
// }
// if (num3 < min) 
// {
//     min = num3;
// }


// window.alert("Min number is: " + min);
// window.alert("Max number is: " + max);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd 

// var num = Number(window.prompt("Enter any number"));
// if(num % 2 == 0)
// {
//     window.alert("Even");
// }
// else
// {
//     window.alert("Odd");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant 

// var char = window.prompt("Enter any character");
// if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U')
// {
//     window.alert("Vowel");
// }
// else
// {
//     window.alert("Consonant");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8- Write a program that allows user to insert integer then print all numbers between 1 to that’s number 

// var num = Number(window.prompt("Enter any number"));
// for(var i = 1 ; i <= num ; i ++)
// {
//     window.alert(i);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9- Write a program that allows user to insert integer then print a multiplication table up to 12. 

// var num = Number(window.prompt("Enter any number"));
// for(var i = 1 ; i <= 12 ; i ++)
// {
//     window.alert(i * num);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10- Write a program that allows to user to insert number then print all even numbers between 1 to this number 

// var num = Number(window.prompt("Enter any number"));
// for(var i = 1 ; i <= num ; i ++)
// {
//     if(i % 2 ==0)
//     {
//         window.alert(i);
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11- Write a program that take two integers then print the power 

// var num1 = Number(window.prompt("Enter first number"));
// var num2 = Number(window.prompt("Enter second number"));
// var tempNum1 = num1;

// for(var i = 1 ; i <= num2-1 ; i ++)
// {
//     num1 *= tempNum1;
// }

// window.alert(num1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12- Write a program to enter marks of five subjects and calculate total, average and percentage. 

// var res = 0;
// for(var i = 0 ; i < 5 ; i ++)
// {
//     res += Number(prompt(`Enter subject num ${i+1} grade`));
// }

// alert(`Total is ${res}, average is ${res/5} and the percentage is ${res/500*100}%`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13- Write a program to input month number and print number of days in that month. 

// var month = Number(prompt("Enter month number (1-12):"));
// var days = 0;

// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//     days = 31;
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     days = 30;
// } else if (month === 2) {
//     days = "28 or 29 (leap year)";
// } else {
//     days = "Invalid month number. Please enter a number from 1 to 12.";
// }

// alert(`Number of days: ${days}`);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade 

// var res = 0;

// res += Number(prompt("Enter Physics grade"));
// res += Number(prompt("Enter Chemistry grade"));
// res += Number(prompt("Enter Biology grade"));
// res += Number(prompt("Enter Mathematics grade"));
// res += Number(prompt("Enter Computer grade"));

// res /= 5;

// if(res >= 90)
// {
//     alert("Your grade is A");
// }
// else if(res >= 80)
// {
//     alert("Your grade is B");
// }
// else if(res >= 70)
// {
//     alert("Your grade is C");
// }
// else if(res >= 60)
// {
//     alert("Your grade is D");
// }
// else if(res >= 40)
// {
//     alert("Your grade is E");
// }
// else
// {
//     alert("Your grade is F");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 15- Write a program to print total number of days in month  

// var month = Number(prompt("Enter month number (1-12):"));
// var days = 0;

// switch (month) {
//     case 1: 
//     case 3: 
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         days = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         days = 30;
//         break;
//     case 2:
//         days = "28 or 29 (leap year)";
//         break;
//     default:
//         days = "Invalid month number. Please enter a number from 1 to 12.";
// }

// alert(`Number of days: ${days}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 16- Write a program to check whether an alphabet is vowel or consonant  

// var alphabet = prompt("Enter any character");

// switch (alphabet) {
//     case 'a':
//     case 'A':
//     case 'e':
//     case 'E':
//     case 'i':
//     case 'I':
//     case 'o':
//     case 'O':
//     case 'u':
//     case 'U':
//         alert("Vowel");
//         break;
//     default:
//         alert("Consonant");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 17- Write a program to find maximum between two numbers   

// var num1 = Number(prompt("Enter first number"));
// var num2 = Number(prompt("Enter second number"));

// switch(true)
// {
//     case num1 > num2:
//         alert("First number is bigger");
//         break;
//     case num2 > num1:
//         alert("Second number is bigger");
//         break;
//     default:
//         alert("Both numbers are equal");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 18- Write a program to check whether a number is even or odd

// var num = Number(prompt("Enter any number"));

// switch (num % 2) {
//     case 0:
//         alert("Number is even");
//         break;
//     default:
//         alert("Number is odd");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 19- Write a program to check whether a number is positive or negative or zero  

// var num = Number(prompt("Enter any number"));

// switch(true){
//     case num > 0:
//         alert("Positive");
//         break;
//     case num < 0:
//         alert("Negative");
//         break;
//     default:
//         alert("Number is Zero");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 20- Write a program to create Simple Calculator 

// var num1 = Number(prompt("Enter first number"));
// var operator = prompt("Enter any operator of the following (+,-,*,/)");
// var num2 = Number(prompt("Enter second number"));

// switch (operator) {
//     case '+':
//         alert(num1 + num2);
//         break;
//     case '-':
//         alert(num1 - num2);
//         break;
//     case '*':
//         alert(num1 * num2);
//         break;
//     case '/':
//         alert(num1 / num2);
//         break;
//     default:
//         alert("Not a valid operator");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
