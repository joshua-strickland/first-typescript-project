export class Weapon {
    averageDamage: number
    weaponName: string
 
    constructor(averageDamage: number, weaponName: string){
        this.averageDamage = averageDamage
        this.weaponName = weaponName
    }

    //new attack return type string method, takes in character class, nabs attributes, adds attribute to avg dmg
    getWeaponAttackString(strengthModifier: number){
        var totalAverageDamage:number = this.averageDamage + strengthModifier 

        var returnString: string = " He deals " + totalAverageDamage + " with his " + this.weaponName
        
        return returnString
    }
}

export class RangedWeapon extends Weapon{
    range: number

    constructor(averageDamage: number, weaponName: string, range: number){
        super(averageDamage, weaponName)
        this.range = range
    }
    //(from xrange away) 
}