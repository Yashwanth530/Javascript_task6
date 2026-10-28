// Create an array of 10 numbers and print each number.


let numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numbers1.forEach(function (number) {

    console.log(number);

});

// Multiply every number by 5 and create a new array.


let numbers2 = [2, 4, 6, 8, 10];
let multipliedNumbers = numbers2.map(function (number) {
    return number * 5;
});
console.log(multipliedNumbers);

// // Get only numbers greater than 20.

let numbers3 = [10, 15, 25, 30, 5, 45, 20, 35];
let greaterThanTwenty = numbers3.filter(function (number) {

    return number > 20;
});

console.log(greaterThanTwenty);

// 4. Create an employee array containing name and salary. Use filter() to display employees whose salary is less than or equal to ₹300,000.

let employees = [

    { name: "Rahul", salary: 250000 },

    { name: "Priya", salary: 350000 },

    { name: "Arun", salary: 200000 },

    { name: "Sneha", salary: 450000 },

    { name: "Kiran", salary: 300000 }

];

let lowSalaryEmployees = employees.filter(function (employee) {

    return employee.salary <= 300000;

});

console.log(lowSalaryEmployees);

// 5. Using the same employee array, use find() to get the first employee whose salary is greater than ₹200,000.
let employeeFound = employees.find(function (employee) {

    return employee.salary > 200000;

});

console.log(employeeFound);
// 6. Use reduce() to calculate the total of all numbers in an array.
let numbers6 = [10, 20, 30, 40, 50];

let total = numbers6.reduce(function (sum, number) {

    return sum + number;

}, 0);

console.log("Total:", total);
// 7. Create an array of numbers and use some() to check whether at least one number is even.
let numbers7 = [3, 7, 9, 12, 15];

let hasEvenNumber = numbers7.some(function (number) {

    return number % 2 === 0;

});

console.log("Contains an even number:", hasEvenNumber);
// 8. Use every() to check whether all numbers in an array are greater than zero.
let numbers8 = [5, 10, 15, 20, 25];
let allPositive = numbers8.every(function (number) {
    return number > 0;

});

console.log("All numbers are positive:", allPositive);
// 9. Given an array of numbers, sort them in ascending order using the sort callback.
let numbers9 = [45, 12, 78, 3, 56, 21];
let ascendingNumbers = [...numbers9].sort(function (a, b) {
    return a - b;
}
);

console.log(ascendingNumbers);
// 10. Given an array of numbers, sort them in descending order using sort() and (a, b) => b - a.
let numbers10 = [45, 12, 78, 3, 56, 21];
let descendingNumbers = [...numbers10].sort((a, b) => b - a);
console.log(descendingNumbers);

console.clear()

// Part 2: String Methods

// 11. charAt()
let language11 = "javascript";
console.log(language11.charAt(4));

// 12. charCodeAt()
let language12 = "javascript";
console.log(language12.charCodeAt(2));

// 13. trim()
let message13 = "   Welcome to JavaScript   ";
let trimmedMessage = message13.trim();
console.log(trimmedMessage);

// 14. toUpperCase() and toLowerCase()
let language14 = "JavaScript";
console.log(language14.toUpperCase());
console.log(language14.toLowerCase());

// 15. includes()
let message15 = "I am learning JavaScript";
console.log(message15.includes("script"));

// 16. startsWith() and endsWith()
let language16 = "JavaScript";
console.log(language16.startsWith("Java"));
console.log(language16.endsWith("Script"));

// 17. replaceAll()
let message17 = "java is popular and java is useful";
let replacedMessage = message17.replaceAll("java", "python");
console.log(replacedMessage);

// 18. split()
let technologies18 = "html-css-javascript-react";
let technologyArray = technologies18.split("-");
console.log(technologyArray);

// 19. join()
let names19 = ["Rahul", "Priya", "Arun", "Sneha"];
let joinedNames = names19.join(", ");
console.log(joinedNames);

// 20. slice()
let message20 = "JavaScript Programming";
let extractedText = message20.slice(0, 10);
console.log(extractedText);

console.clear();

// Part 3: Date Methods

// 21. Create a Date object and print the current year, month, date, and day.

let currentDate21 = new Date();

console.log("Year:", currentDate21.getFullYear());
console.log("Month:", currentDate21.getMonth() + 1);
console.log("Date:", currentDate21.getDate());
console.log("Day:", currentDate21.getDay());


// 22. Use getMonth() to display the current month name.

let months22 = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let currentDate22 = new Date();

console.log("Current Month:", months22[currentDate22.getMonth()]);


// 23. Print the current hours, minutes, and seconds.

let currentDate23 = new Date();

console.log("Hours:", currentDate23.getHours());
console.log("Minutes:", currentDate23.getMinutes());
console.log("Seconds:", currentDate23.getSeconds());


// 24. Change the year to 2003, month to January, and date to 30.

let customDate24 = new Date();

customDate24.setFullYear(2003);
customDate24.setMonth(0);
customDate24.setDate(30);

console.log("Updated Date:", customDate24);

// Part 4: Asynchronous JavaScript

// 25. Use setTimeout() to print "Welcome to JavaScript" after 3 seconds.

setTimeout(function () {
    console.log("Welcome to JavaScript");
}, 3000);


// 26. Use setInterval() to print "Learning JavaScript" every 2 seconds.

let intervalId = setInterval(function () {
    console.log("Learning JavaScript");
}, 2000);


// 27. Stop the interval after 8 seconds using clearInterval().

setTimeout(function () {
    clearInterval(intervalId);
}, 8000);


// 28. Create three functions and observe the output order.

function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

function three() {
    console.log("Three");
}

one();
setTimeout(two, 0);
three();

console.clear();
// Part 5: Promises and API Fetching
// 29. Create a Promise that resolves with "Login successful" and display it using .then().

let loginPromise = new Promise(function (resolve, reject) {
    resolve("Login successful");
});

loginPromise.then(function (message) {
    console.log(message);
});


// 30. Create a Promise that rejects with "Invalid password" and handle it using .catch().

let passwordPromise = new Promise(function (resolve, reject) {
    reject("Invalid password");
});

passwordPromise.catch(function (error) {
    console.log(error);
});


// 31. Use .finally() to print "Process completed" regardless of the result.

let processPromise = new Promise(function (resolve, reject) {
    resolve("Process successful");
});

processPromise
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.warn(error);
    })
    .finally(function () {
        console.log("Process completed");
    });


// 32. Fetch product data and print all product titles using forEach().

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        products.forEach(function (product) {
            console.log(product.title);
        });
    });


// 33. Fetch the API and print each product's title, price, and category.

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        products.forEach(function (product) {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
        });
    });


// 34. Handle API errors using .catch() and console.warn().

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        return response.json();
    })
    .then(function (products) {
        console.log(products);
    })
    .catch(function (error) {
        console.warn("API Error:", error.message);
    });


// 35. Use .finally() to print "API call completed" after the fetch process.

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        return response.json();
    })
    .then(function (products) {
        console.log(products);
    })
    .catch(function (error) {
        console.warn("API Error:", error.message);
    })
    .finally(function () {
        console.log("API call completed");
    });

    // Part 6: Real-Time Mini Tasks

    console.clear();

    // 36. Employee salary report: Filter employees earning less than ₹300,000.

let employees36 = [
    { name: "Rahul", salary: 250000 },
    { name: "Priya", salary: 350000 },
    { name: "Arun", salary: 200000 },
    { name: "Sneha", salary: 280000 },
    { name: "Kiran", salary: 400000 }
];

let selectedEmployees36 = employees36.filter(function (employee) {
    return employee.salary < 300000;
});

selectedEmployees36.forEach(function (employee) {
    console.log("Name:", employee.name, "| Salary: ₹" + employee.salary);
});


// 37. Product price calculator: Create an array containing only product titles and prices.

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then(function (products) {
        let productDetails = products.map(function (product) {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log(productDetails);
    })
    .catch(function (error) {
        console.warn("API Error:", error.message);
    })
    .finally(function () {
        console.log("Product price calculation completed");
    });


// 38. Product search: Display products belonging to a chosen category.

let selectedCategory38 = "electronics";

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then(function (products) {
        let filteredProducts = products.filter(function (product) {
            return product.category === selectedCategory38;
        });

        console.log("Products in category:", selectedCategory38);
        console.log(filteredProducts);
    })
    .catch(function (error) {
        console.warn("API Error:", error.message);
    })
    .finally(function () {
        console.log("Product search completed");
    });


// 39. Number analysis: Use map(), filter(), reduce(), some(), and every().

let numbers39 = [10, 15, 20, 25, 30, 35];

// map(): Multiply every number by 2.
let doubledNumbers39 = numbers39.map(function (number) {
    return number * 2;
});
console.log("Doubled numbers:", doubledNumbers39);

// filter(): Select numbers greater than 20.
let greaterThanTwenty39 = numbers39.filter(function (number) {
    return number > 20;
});
console.log("Numbers greater than 20:", greaterThanTwenty39);

// reduce(): Calculate the total.
let total39 = numbers39.reduce(function (sum, number) {
    return sum + number;
}, 0);
console.log("Total:", total39);

// some(): Check whether at least one number is even.
let hasEvenNumber39 = numbers39.some(function (number) {
    return number % 2 === 0;
});
console.log("Contains an even number:", hasEvenNumber39);

// every(): Check whether all numbers are positive.
let allPositive39 = numbers39.every(function (number) {
    return number > 0;
});
console.log("All numbers are positive:", allPositive39);


// 40. Product listing: Print product titles, prices, and categories.
// Handle errors with catch() and print a completion message with finally().

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        return response.json();
    })
    .then(function (products) {
        products.forEach(function (product) {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("-----------------------------");
        });
    })
    .catch(function (error) {
        console.warn("API Error:", error.message);
    })
    .finally(function () {
        console.log("API call completed");
    });
