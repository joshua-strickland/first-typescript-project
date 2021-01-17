"use strict";
exports.__esModule = true;
exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character(characterName, weapon, strengthModifier, dexterityModifier, constitutionModifier, intelligenceModifier, wisdomModifier, charismaModifier) {
        this.characterName = characterName;
        this.weapon = weapon;
        this.strengthModifier = strengthModifier;
        this.dexterityModifier = dexterityModifier;
        this.constitutionModifier = constitutionModifier;
        this.intelligenceModifier = intelligenceModifier;
        this.wisdomModifier = wisdomModifier;
        this.charismaModifier = charismaModifier;
    }
    Character.prototype.attack = function () {
        //Gigantius attacks a nefarious target!
        var returnString = this.characterName + " attacks a nefarious target!";
        //this line adds the string "He deals 11.5 with his Maul" to "Gigantius attacks a nefarious target!"
        returnString += this.weapon.getWeaponAttackString(this.strengthModifier);
        //Combined strings: Gigantius attacks a nefarious target! He deals 11.5 with his Maul
        return returnString;
    };
    return Character;
}());
exports.Character = Character;
