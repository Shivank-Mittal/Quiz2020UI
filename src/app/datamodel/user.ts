export class User{

    email : string
    loginName: string
    

    constructor(loginName: string , email : string){
        this.loginName = loginName;
        this.email = email;
    }
}