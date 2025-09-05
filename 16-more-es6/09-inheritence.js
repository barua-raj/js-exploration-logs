class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating!`);
    }
}
class Dog extends Animal {
    constructor(name, breed, age) {
        super(name, age)
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} is barking!`);
    }
}
class Cat extends Animal{
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
    meow() {
        console.log(`${this.name} is meowing!`);
    }
}
class Bird extends Animal {
    constructor(name, species, age){
        super(name, age);
        this.species = species;
    }
}
const dog1 = new Dog('Putu', 'Deshi');
dog1.eat();
const cat1 = new Cat('Puchu', 5, 'white');
cat1.eat();
const bird1 = new Bird('Kobutor', 'Deshi', 12);
bird1.eat();