import { User } from "../app/User";

export class Customer implements User{
    forename: string;
    surname: string;
    nickname: string | undefined;
    emailAddress: string;
    role: string;
    createdDate: Date;
    dateRemoved: Date | undefined;
    locked: boolean;
    failedLoginAttempts: number;
    LastLoingDate: Date;
    constructor(fname: string, sname: string, nname: string | undefined,  
        email: string, r: string,  created: Date, Removed: Date | undefined, islocked: boolean,failedLogin: number, LastLoing: Date,){
            this.forename = fname;
            this.surname =sname;
            this.nickname = nname;
            this.emailAddress = email;
            this.role = r;
            this.createdDate = created;
            this.dateRemoved =Removed;
            this.locked =islocked;
            this.failedLoginAttempts = failedLogin;
            this.LastLoingDate =LastLoing;

    }
    FirstName(): string {
        if(this.nickname == undefined){
            let forname = this.forename.substring(this.forename.indexOf(this.forename),
                                            this.forename.indexOf(' ',this.forename.indexOf(this.forename))- this.forename.indexOf(this.forename));
                                            return forname;
        }
        return this.nickname;
    }


    FullName(): string {
        return this.FirstName() + this.forename;
    }
    
 
}