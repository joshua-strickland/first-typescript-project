import { Weapon } from "./weapon"

export class Character {
    characterName: string
    weapon: Weapon

    constructor(characterName: string, weapon: Weapon) {
        this.characterName = characterName
        this.weapon = weapon
    }

    attack(){
        var returnString: string = this.characterName + " attacks a nefarious target with his " + this.weapon.weaponName + " for " + this.weapon.averageDamage.toString();
        return returnString
    }


}