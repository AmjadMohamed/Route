// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
// Output Example: 130
{
    let number = Number("123");
    number += 7;
    // console.log(number);
}

// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// Input Example: 0
// Output Example: "Invalid"
{
    let number = 0;
    if (Boolean(number) == false) {
        //  console.log("Invalid");
    }
    else {
        // console.log("Valid");
    }
}


// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// Output Example: 1, 3, 5, 7, 9
{
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) continue;
        // console.log(i);
    }
}



// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// Input Example: [1, 2, 3, 4, 5]
// Output Example: [2, 4]
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // console.log(arr.filter((num) => num % 2 == 0));
}



// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// Input Example: [1, 2, 3], [4, 5, 6]
// Output Example: [1, 2, 3, 4, 5, 6]
{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let mergedArr = [...arr1, ...arr2];
    // console.log(mergedArr);
}




// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
// Input Example: 2
// Output Example: "Monday"
{
    let dayNum = 2;
    let day = "Enter a valid day number";
    switch (dayNum) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
    }
    // console.log(day);
}




// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
// Input: ["a", "ab", "abc"]
// Output Example: [1, 2, 3]
{
    let strArr = ["a", "ab", "abc", "abcd"];
    let len = strArr.map((str) => str.length);
    // console.log(len);
}



// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// Input Example: 15
// Output Example: "Divisible by both"
{
    function checkDiv(number) {
        if (number % 3 == 0 && number % 5 == 0) {
            console.log("Divisible by both");
        }
        else {
            console.log("Not Divisible by both");
        }
    }

    // checkDiv(3);
    // checkDiv(30);
    // checkDiv(8);
    // checkDiv(15);
}



// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
// Input Example: 5
// Output Example: 25
{
    let getSquare = (num) => num * num;
    // console.log(getSquare(2));
    // console.log(getSquare(3));
    // console.log(getSquare(5));
}



// 10. Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// Input Example: const person = {name: 'John', age: 25}
// Output Example: 'John is 25 years old'
{
    const car = {
        "model": "Toyota",
        "year": 2025,
        "color": "White",
        "price": 25000
    }

    function describeCar({ model, year, color, price }) {
        return `The ${color} ${model} was made in ${year} and costs ${price}`;
    }

    // console.log(describeCar(car));

}


// 11. Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// Input Example: 1, 2, 3, 4, 5
// Output Example: 15
{
    function sumNumbers(...nums) {
        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            res += nums[i];
        }
        return res;
    }

    // console.log(sumNumbers(1, 2, 3, 4, 5));

}



// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// Output Example: "Success"
{
    function promiseFunc() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Success")
            }, 3000);
        })
    }

    // promiseFunc().then((message) => console.log(message));
}



// 13. Write a function to find the largest number in an array. (0.5 Grade)
// Input Example: [1, 3, 7, 2, 4]
// Output Example: 7
{
    let arr = [1, 3, 7, 2, 4];
    let biggestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > biggestNum) biggestNum = arr[i];
    }

    // console.log(biggestNum);
}




// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// Input Example: {name: "John", age: 30}
// Output Example: ["name", "age"]
{
    let person = {
        "name": "amjad",
        "age": 27,
        "job": "Software Engineer"
    }

    function returnKeys(obj) {
        return Object.keys(obj);
    }

    // console.log(returnKeys(person));

}



// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// Input: "The quick brown fox"
// Output: ["The", "quick", "brown", "fox"]

{
    function splitString(str) {
        return str.split(' ');
    }

    // console.log(splitString("The quick brown fox"));
}



// 16. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
// forEach is an array method that runs a callback for every element and cannot be
// stopped early with break/continue. for...of is a language construct that works on
// any iterable (arrays, strings, Map, Set, generators...) and supports break/continue,
// and works properly with await inside the loop.
{
    let arr = [1, 2, 3, 4];

    arr.forEach((num) => {
        if (num === 3) return; // only skips this iteration, cannot break the loop
        // console.log(num);
    });

    for (const num of arr) {
        if (num === 3) break; // can stop the loop early
        // console.log(num);
    }
    // Use forEach for a simple side effect on every array element with no need to break.
    // Use for...of when you need break/continue, non-array iterables, or await inside the loop.
}



// 17. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)
// Hoisting moves declarations to the top of their scope before execution. var is hoisted
// and initialized with undefined, function declarations are hoisted fully. let/const are
// hoisted too but not initialized, so accessing them before their declaration line throws
// a ReferenceError - that period is called the Temporal Dead Zone (TDZ).
{
    function hoistingDemo() {
        // console.log(x); // undefined -> declaration hoisted, not the assignment
        var x = 5;

        try {
            // console.log(y); // ReferenceError: Cannot access 'y' before initialization
            let y = 10;
        } catch (error) {
            // console.log(error.message);
        }
    }

    // hoistingDemo();
}



// 18. What are the main differences between == and ===? (0.5 Grade)
// === (strict equality) compares value and type, with no conversion.
// == (loose equality) converts operands to the same type before comparing, which can
// lead to surprising results. === is the recommended default.
{
    // console.log(0 == "0");   // true  -> "0" coerced to number 0
    // console.log(0 === "0");  // false -> different types

    // console.log(null == undefined);  // true  -> special case in the spec
    // console.log(null === undefined); // false -> different types

    // console.log(1 == true);  // true  -> true coerced to 1
    // console.log(1 === true); // false -> different types
}



// 19. Explain how try-catch works and why it is important in async operations. (0.5 Grade)
// try runs code that might throw, catch handles the error instead of crashing the
// program, and finally always runs afterwards. With async/await, a rejected Promise
// behaves like a thrown error, so wrapping an await in try-catch lets you handle
// network failures or invalid data in one place instead of getting an unhandled
// promise rejection.
{
    async function fetchUser(id) {
        try {
            const response = await fetch(`/api/users/${id}`);
            if (!response.ok) throw new Error("Request failed");
            const user = await response.json();
            return user;
        } catch (error) {
            // console.error("Could not fetch user:", error.message);
        } finally {
            // console.log("This always runs.");
        }
    }

    // fetchUser(1);
}



// 20. What's the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
// Type conversion is explicit: the developer deliberately converts a value's type
// using a function like Number(), String(), or Boolean(). Type coercion is implicit:
// JavaScript automatically converts types behind the scenes as a side effect of an
// operator like + or == or a boolean context.
{
    // Explicit conversion
    // console.log(Number("123"));    // 123
    // console.log(String(123));      // "123"
    // console.log(Boolean(0));       // false

    // Implicit coercion
    // console.log("5" + 1);   // "51" -> number 1 coerced to string
    // console.log("5" - 1);   // 4    -> string "5" coerced to number
    // console.log(1 + true);  // 2    -> true coerced to number 1
}
