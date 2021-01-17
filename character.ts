import { Weapon } from "./weapon"

export class Character {
    characterName: string
    weapon: Weapon
    strengthModifier: number
    dexterityModifier: number
    constitutionModifier: number
    intelligenceModifier: number
    wisdomModifier: number
    charismaModifier: number


    constructor(characterName: string, weapon: Weapon, strengthModifier: number, dexterityModifier: number, constitutionModifier: number,intelligenceModifier: number, wisdomModifier: number, charismaModifier: number) {
        this.characterName = characterName
        this.weapon = weapon
        this.strengthModifier = strengthModifier
        this.dexterityModifier = dexterityModifier
        this.constitutionModifier = constitutionModifier
        this.intelligenceModifier = intelligenceModifier
        this.wisdomModifier = wisdomModifier
        this.charismaModifier = charismaModifier
    }

    attack(){
        //Gigantius attacks a nefarious target!
        var returnString: string = this.characterName + " attacks a nefarious target!"
        
        //this line adds the string "He deals 11.5 with his Maul" to "Gigantius attacks a nefarious target!"
        returnString += this.weapon.getWeaponAttackString(this.strengthModifier)
        
        //Combined strings: Gigantius attacks a nefarious target! He deals 11.5 with his Maul
        return returnString
    }

}