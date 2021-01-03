var catBreed;
catBreed = "manx";
console.log(catBreed);
//this declares a list of type number
var list = [5, 2, 3];
//this prints out the element at position 0 (also called index 0)
console.log(list[0]);
// this prints out each element in the list
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    console.log(i);
}
//this is the same as above example, except uses a list of strings
var stringList = ["asd", "asd2"];
for (var _a = 0, stringList_1 = stringList; _a < stringList_1.length; _a++) {
    var i = stringList_1[_a];
    console.log(i);
}
//this declares an enum, which represents a number in human readable terms.
var Race;
(function (Race) {
    Race[Race["Gnome"] = 0] = "Gnome";
    Race[Race["Elf"] = 1] = "Elf";
    Race[Race["Dwarf"] = 2] = "Dwarf";
    Race[Race["Human"] = 3] = "Human";
})(Race || (Race = {}));
var joshsCharacterRace = Race.Gnome;
//if is a conditional statement. It only runs the code in the {} if the conditional expression in the () is fulfilled.
if (joshsCharacterRace == Race.Gnome) {
    console.log("gnome");
    console.log(joshsCharacterRace); //prints out index of the race as it appears in declaration
}
//functions are code that can be run repeatedly by calling the functionname and passing in a parameter
//in this function, we have one parameter of type Race (which we made above). parameters are passed into the function parenthesis
//each function will have a return type indicated by a colon (:). in this function, we are returning a string from the function to be used in the console.log function later
function whatsTheRace(race) {
    var raceToReturn;
    //The switch statement is basically a lot of if statements put together. 
    //each switch statement will take in a parameter. This parameter is used with the conditionals that follow
    //Each case corresponds to a conditional expression. when the expression is satisfied, the code in the case braces runs
    //break is critical to use here. Without break, the switch will continue to the next case which may not be what you desire logically
    switch (race) {
        case Race.Gnome: {
            raceToReturn = "gnome";
            break;
        }
        case Race.Elf: {
            raceToReturn = "elf";
            break;
        }
        case Race.Dwarf: {
            raceToReturn = "dwarf";
            break;
        }
        case Race.Human: {
            raceToReturn = "human";
            break;
        }
    }
    return raceToReturn;
}
console.log(whatsTheRace(joshsCharacterRace));
