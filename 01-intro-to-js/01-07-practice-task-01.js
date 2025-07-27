// // Task-1
    // You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

    // Input:
    // The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

    // Output:
    // Print the result.

    // Sample Input:
    // 1000
    // 700

    // Sample Output:
    // 300

    let takeToBuy = Number(prompt("How much money did I take:"));
    let costOfOrange = Number(prompt("Cost of 1 kg of orange:"));
    let costOfapples = Number(prompt("Cost of 1 kg of apples:"));
    let totalCost = costOfOrange + costOfapples;
    let returnedMoney = takeToBuy - totalCost;

    console.log("The shopkeeper returned:", returnedMoney, "Taka");
    
    let number1= prompt("Enter a number:");
let number2= prompt("Enter a number:");

// Convert the input (which is a string) to a number
number = number1 + number2;

console.log("You entered:", number1);
console.log("You entered:", number2);
console.log("Total:", number);