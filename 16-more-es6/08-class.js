class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        // console.log('calling the constructor method!', name);
    }
    goal(){
        console.log('score a goal');
    }
    getTeamName(){
        return 'barca';
    }
};
const player1 = new Player('Tom', 30);
const player2 = new Player('Tommy', 40);
console.log(player1);
console.log(player2 instanceof Player);

class Student{
    constructor(id, name, age, subject, marks){
        this.id = id;
        this.name = name;
        this.age = age;
        this.subject = subject;
        this.marks = marks;
    }
    finalOutput(){
        console.log(`ID: ${this.id}:, Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}, Marks: ${this.marks}`);
    }
}
const student1 = new Student(12, "Abdul Rahim", 30, "Physics", 80);
const student2 = new Student(25, "Md. Rahman", 25, "English", 60);
student1.finalOutput();
student2.finalOutput();

