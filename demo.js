//BASIC CLASS

const { isConstructorDeclaration } = require("typescript");

class Animal {
//class properties
//methods
//constructor     
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
        //whatever you give to the constructor it assigns to the instance 
    }
    
    //METHOD
    speak() {
    console.log(this.name)
    }
    
    
}

let dog = new Animal("jeffrey", 4);
let cat = new Animal("miss kitty", 4);
cat.speak();

console.log(dog, cat)

let numbers = [1, 2, 3, 4];
class Template {
    constructor(n) {
    this.value=n
    }
}
let tNumbers = numbers.map(n => new Template(n))
console.log(tNumbers);


//GETTERS and SETTERS

class Authentication {
    constructor(username, _password) {
        this.username = username;
        this._password = _password;
    }
    
    get password() {
        return this._password
    }
    set password(n) {
        if (typeof n === "number") {
            this._password = n;
        }
    }
}
