import { BankAccount } from "./";

export interface Character {
    firstname: string,
    middleNames: [string],
    cash: number,
    bankAccounts: [BankAccount]
}