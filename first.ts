var catBreed: string;

catBreed = "manx";

console.log(catBreed);

//this declares a list of type number
let list: number[] = [5,2,3];

//this prints out the element at position 0 (also called index 0)
console.log(list[0])

// this prints out each element in the list
for (let i of list){
    console.log(i);
}

//this is the same as above example, except uses a list of strings
let stringList: string[] =["asd","asd2"];
for (let i of stringList){
    console.log(i);
}

//this declares an enum, which represents a number in human readable terms.
enum Race {Gnome,Elf,Dwarf,Human}

let joshsCharacterRace: Race = Race.Gnome

//if is a conditional statement. It only runs the code in the {} if the conditional expression in the () is fulfilled.
if(joshsCharacterRace == Race.Gnome){
    console.log("gnome")
    console.log(joshsCharacterRace) //prints out index of the race as it appears in declaration
}

//functions are code that can be run repeatedly by calling the functionname and passing in a parameter
//in this function, we have one parameter of type Race (which we made above). parameters are passed into the function parenthesis
//each function will have a return type indicated by a colon (:). in this function, we are returning a string from the function to be used in the console.log function later
function whatsTheRace(race: Race): string {
    let raceToReturn: string;

    //The switch statement is basically a lot of if statements put together. 
    //each switch statement will take in a parameter. This parameter is used with the conditionals that follow
    //Each case corresponds to a conditional expression. when the expression is satisfied, the code in the case braces runs
    //break is critical to use here. Without break, the switch will continue to the next case which may not be what you desire logically
    switch(race) { 
        case Race.Gnome: { 
           raceToReturn = "gnome"
           break; 
        } 
        case Race.Elf: { 
            raceToReturn = "elf"
            break; 
         }
        case Race.Dwarf: { 
            raceToReturn = "dwarf"
            break; 
         }
        case Race.Human: { 
            raceToReturn = "human"
            break; 
         }
     }
     
     return raceToReturn;
  }

  console.log(whatsTheRace(joshsCharacterRace))