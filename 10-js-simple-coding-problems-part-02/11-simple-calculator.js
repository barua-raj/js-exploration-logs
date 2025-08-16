function addition(num1, num2){
    const result = num1 + num2;
    return result;
}
function subtraction(num1, num2){
    const result = num1 - num2;
    return result;
}
function multiplication(num1, num2){
    const result = num1 * num2;
    return result;
}
function division(num1, num2){
    const result = num1 / num2;
    return result;
}

function calculator(a, b, operation){
    if (operation === 'addition'){
        const result = addition(a, b);
        return result;
    }
    else if (operation === 'subtraction'){
        const result = subtraction(a, b);
        return result;
    }
    else if (operation === 'multiplication'){
        const result = multiplication(a, b);
        return result;
    }
    else if (operation === 'division'){
        const result = division(a, b);
        return result;
    }
    else {
        const result = "Only 'Addition', 'Subtraction', 'Multiplication', 'Division' allowed!"
        return result;
    }
}
const result = calculator(50, 10, 'division');
console.log(result);