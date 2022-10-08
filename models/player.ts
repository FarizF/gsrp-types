import { Character } from "./character";

export interface Player {
    id: string,
    hardwareIds: [string],
    characters: [Character]
}