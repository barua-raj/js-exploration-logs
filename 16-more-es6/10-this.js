class Vehicle {
    #tin;
    constructor(type, brand, price) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.#tin = '123456';
    }
    getThis() {
        console.log(this);
    }
    getPrice() {
        return this.price;
    }
    getTin() {
        return this.#tin;
    }
}
const car1 = new Vehicle('car', 'Toyota', 5000000);
const car2 = new Vehicle('truck', 'Honda', 4500000)
// console.log(car1.getPrice());
// console.log(car2.getPrice());
console.log(car1);
console.log(car1.price);




const student = {
    name: 'Abul Karim',
    score: 500,
    getScore: function() {
        console.log(this);
    },
    getScoreArrow: () => {
        console.log(this);
    }
}
// student.getScore();
// student.getScoreArrow();
// console.log('ultimate this', this);
