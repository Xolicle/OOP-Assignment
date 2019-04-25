class Person {
    constructor(name, surname, age, interests){
        this.name = name,
        this.surname = surname,
        this.age = age,
        this.interests = interests
    }
    greeting(){
        `Hello my name is ${this.name} ${this.surname}, I'm ${this.age} years old and my interests are
         ${this.interests[0]}, ${this.interests[1]}`;}
    }

    let person_1 = new Person(akhona, Ndlovu, 13,[dancing, playing]);
    let person_2 = new Person(Aphiwe, Ndlovu, 10, [singing, reading]);
    console.log(person_1.greeting());