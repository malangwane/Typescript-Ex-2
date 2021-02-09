import { User } from "../app/User";
import {Customer} from "./Customer"

class SalesRep implements User{
    forename: string;
    surname: string;
    nickname: string | undefined;
    emailAddress: string;
    role: string;
    createdDate: Date;
    dateRemoved: Date | undefined;
    locked: boolean;
    failedLoginAttempts: number;
    customers: Customer[];

    constructor(fname: string, sname: string,nname: string | undefined,email: string,r: string,created: Date,removed: Date | undefined,
        islocked: boolean,failedLoginAttempts: number,){

            this.forename = fname;
            this.surname = sname;
            this.nickname =nname;
            this.emailAddress = email;
            this.role = r;
            this.createdDate = created;
            this.dateRemoved = removed;
            this.locked =islocked;
            this.failedLoginAttempts = failedLoginAttempts;
            this.customers = [];

    }


    FirstName(): string {
        return this.forename.substring(this.forename.indexOf(this.forename),
        this.forename.indexOf(' ',this.forename.indexOf(this.forename))- this.forename.indexOf(this.forename));
    }
    FullName(): string {
        return this.FirstName() + this.surname;
    }

}