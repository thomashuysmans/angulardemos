export class User {
    constructor(public username: string, public email: string, public password: string){
    }

    toString(){
        return 'Username: ' + this.username + ' email: ' + this.email + ' password: ' + this.password;
    }
}
