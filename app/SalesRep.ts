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

    FirstName(): string {
        return this.forename.substring(this.forename.indexOf(this.forename),
        this.forename.indexOf(' ',this.forename.indexOf(this.forename))- this.forename.indexOf(this.forename));
    }
    FullName(): string {
        return this.FirstName() + this.surname;
    }

}