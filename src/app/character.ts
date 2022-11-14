import { character_skill } from "./skill";
import { attributeVar } from "./attribute-var";

export interface Character{
    name: string,
    class: string,
    species: string,
    level: number,
    strength: number,
    dexterity: number,
    charisma: number,
    intelligence: number,
    luck: number,
    hp: attributeVar,
    wp: attributeVar,
    ac: number,
    experience: number,
    skills: character_skill[],
}

export function getModifier(val: number): number {
    if(val >= 9 && val <= 12){
        return 0;
    }
    if(val >= 6 && val <= 8){
        return -1;
    }
    if(val >= 4 && val <= 5){
        return -2;
    }
    if(val >= 13 && val <= 15){
        return 1;
    }
    if(val >= 16 && val <= 17){
        return 2;
    }
    if(val >= 18){
        return 3 + val - 18;
    }
    if(val <= 3){
        return -3 + val -3;
    }
    return 0;
}