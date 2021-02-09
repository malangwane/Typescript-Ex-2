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


    FirstName(): string {
        if(this.nickname == undefined){
            return this.forename.substring(this.forename.indexOf(this.forename),
                                            this.forename.indexOf(' ',this.forename.indexOf(this.forename))- this.forename.indexOf(this.forename));
        }
    }

    FullName(): string {
        return this.FirstName() + this.forename;
    }
    
 
}