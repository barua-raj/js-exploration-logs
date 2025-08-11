const phonePrices = [12000, 34000, 4500, 9500, 1200, 56000];
function getCheapestPhone(numbers){
    let min = numbers[0];
    for (const num of numbers){
        if (num < min){
            min = num;
        }
    }
    return min;
}
const price = getCheapestPhone(phonePrices);
console.log("The cheapest phone price is",price);
