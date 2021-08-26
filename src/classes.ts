//INTERFACES 


interface Point {
    calculate(): Number;
}

interface Point {
    calculate(): Number;
}

//interfaces can be added to classes using keyword implement 
type message = "success" | "failure"

interface Send {
    send(): message
}

interface getMsg {
    myMessage(): string;
}

//CLASS MAIL 
class Mail implements Send {
    private _password: string | undefined;
    
    constructor(
        public data: string)
    {
        this._password = undefined;
    }
    
    set password(x: string | undefined) {
        this._password = x;
    }
    get password(): string | undefined{
    return this._password;
}
    send(): message {
    let returnValue: message = "success"
    return returnValue;
    }
}

class Email implements Send, getMsg {
    data
    constructor(data: string) {
        this.data = data;
    }
    send() {
        let returnValue: message = "success"
        return returnValue;
    }
    
    //set msg
    myMessage(): string {
        return this.data;
    }
}


const messages = [new Mail("hello how are you"), new Email("deals deals deals")]
messages.forEach(m => m.send())
let email = new Email("happy birthday");
console.log(email.myMessage());



