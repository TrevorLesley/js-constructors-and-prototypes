const date1 = Date();
const date2 = new Date();

console.log(typeof (date1)); // Returns a string
console.dir(date1);
console.log(typeof (date2)); // Returns an object
console.dir(date2);


// Array []
// Object { }
// Date


// const students = new Array('Aleena', 'Trevor', 'Esteban', 'Kate', 'Scotty', 'Eric', 'Sayeda');
const students = ['Aleena', 'Trevor', 'Esteban', 'Kate', 'Scotty', 'Eric', 'Sayeda'];

// const obj = new Object({
//     name: 'Charlie',
// });

const obj = {
    name: 'Charlie',
};

function Dog() {
    console.log('Making a dog. Woof! Woof!');
}

const charlie = Dog();
console.log(charlie); // Going to console log undefined, because Dog() doesn't have a return command.

const howie = new Dog();
console.dir(howie); // Object

// Best practice is to capitalize the first letter for functions used to build constructors.

// const button = document.querySelector('button');
// button.addEventListener('click', function (event) {
//     console.log(this);
//     console.log(event.target);
// });

const person = {
    name: 'Henry',
    greeting() {
        console.log(this);
    }
}

person.greeting();

// When the value of this is used against an object, this IS the object.

function Dog() {
    // console.log(this);
    this.name = 'harper'
}


const harper = new Dog();
const peanut = new Dog();

// The /this/ keyword when creating an object refers to the object it's being used in. Basically, it's saying, 'in THIS constructor, define the object using THESE keys'.



/* When creating a constructor, be sure to set the default object values to an empty {} so you don't catch an error when you don't define the object values in the creation of the new object. */

function Dog(name = 'no name yet') {
    this.name = name;
}

const harper = new Dog();
const peanut = new Dog('Peanut');

function Dog({ name, color } = {}) {
    this.name = name;
    this.color = color;
}

const peanut = new Dog({ 'Peanut' });
const harper = new Dog({ 'Harper' });

peanut.name // Peanut
harper.name // Harper

Dog.prototype.changeName = function (newName) {
    this.name = newName;
}

harper.changeName('Harp');

peanut.name // Peanut
harper.name // Harp

// const harper = new Dog();
// const peanut = new Dog({ name: 'Peanut' });


function Dog({ name = 'Hey puppy.', color } = {}) {
    this.name = name;
    this.color = color;
}

const harper = new Dog({ color: 'red' });
const peanut = new Dog({ name: 'Peanut' });

// Constructors are just like cookie cutters.

//-----------------Prototypes---------------------//

function Dog({ name = 'Hey puppy.', color } = {}) {
    this.name = name;
    this.color = color;
    this.speaks = function () {
        console.log(`${this.name} says Woof! Woof!`);
    }
}

const harper = new Dog({ color: 'red', name: 'Harper' });
const peanut = new Dog({ name: 'Peanut' });

peanut.speaks();
harper.speaks();


function Dog({ name, color } = {}) {
    this.name = name;
    this.color = color;

    // this.speaks = function () {
    //     console.log(`${this.name} says woof!`);
    // }
}

Dog.prototype.speaks = function () {
    console.log(`${this.name} says woof!`);
};

// This above is a prototype chain. Can be updated later and the code will be 
// using the updated prototype chain.

const peanut = new Dog({ name: 'Peanut' });
const harper = new Dog({ name: 'Harper', color: 'red' });
const sally = new Dog();

peanut.speaks();
harper.speaks();

// peanut.speaks = function () {

// }

