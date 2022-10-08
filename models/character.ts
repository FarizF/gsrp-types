import { BankAccount } from "./BankAccount";

export interface Character {
    firstname: string,
    middleNames: [string],
    cash: number,
    bankAccounts: [BankAccount]
}