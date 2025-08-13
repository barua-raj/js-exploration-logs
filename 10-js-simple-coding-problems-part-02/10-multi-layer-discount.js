function layerDiscountTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if (quantity <= 100){
        const totalPrice = first100Price * quantity;
        return totalPrice;
    }
    else if (quantity <= 200){
        const first100TotalPrice = first100Price * 100;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const totalPrice = first100TotalPrice + remainingTotal;
        return totalPrice;
    }
    else {
        const first100TotalPrice = first100Price * 100;
        const second100Total = second100Price * 100;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100TotalPrice + second100Total + remainingTotal;
        return total;
    }
}
const result = layerDiscountTotal(50550);
console.log(result);
