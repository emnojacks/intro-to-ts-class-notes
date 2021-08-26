"use strict";
//INTERFACES 
//CLASS MAIL 
class Mail {
    constructor(data) {
        this.data = data;
        this._password = undefined;
    }
    set password(x) {
        this._password = x;
    }
    get password() {
        return this._password;
    }
    send() {
        let returnValue = "success";
        return returnValue;
    }
}
class Email {
    constructor(data) {
        this.data = data;
    }
    send() {
        let returnValue = "success";
        return returnValue;
    }
    //set msg
    myMessage() {
        return this.data;
    }
}
const messages = [new Mail("hello how are you"), new Email("deals deals deals")];
messages.forEach(m => m.send());
let email = new Email("happy birthday");
console.log(email.myMessage());
