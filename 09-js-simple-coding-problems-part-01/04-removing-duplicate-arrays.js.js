// remove duplicate items from an array

const names = ['Abul', 'Karim', 'Rahim', 'Abul', 'Salim', 'Rahim', 'Rahman', 'Karim'];
const numbers = [10, 20, 10, 50, 30, 20, 40, 30, 90, 70, 80, 90];

function removingDuplicateArray(array){
    const unique = [];
    for (const item of array){
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = removingDuplicateArray(names);
console.log(uniqueArray);

const uniqueArrayNumbers = removingDuplicateArray(numbers);
console.log(uniqueArrayNumbers);