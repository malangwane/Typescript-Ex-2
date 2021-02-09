export interface User{
    forename: string;
    surname: string;
    nickname: string | undefined;
    emailAddress: string;
    role: string;
    createdDate: Date;
    dateRemoved: Date | undefined;
    locked: boolean;
    failedLoginAttempts: number;

    FirstName(): string;
    FullName(): string;
}