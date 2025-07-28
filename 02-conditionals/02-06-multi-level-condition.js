const price = 4500;

if (price >= 5000) {
    // 10% discount
    const discount = price * (10 / 100);
    console.log("Discount price", discount);
    const payAmount = price - discount;
    console.log("Amount to be paid", payAmount);
}
else if (price < 4000) {
    // 5% discount
    const discount = price * (5 / 100);
    console.log("Discount price", discount);
    const payAmount = price - discount;
    console.log("Amount to be paid", payAmount);
}
else {
    console.log("No discount");
}