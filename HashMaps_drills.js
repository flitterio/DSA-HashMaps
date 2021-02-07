const {HashMap} = require('./hashMap')

function main(){
    const lotr = new HashMap();
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    lotr.set("Hobbit","Bilbo");
    lotr.set("Hobbit","Frodo");
    lotr.set("Wizard","Gandalf");
    lotr.set("Human","Aragon");
    lotr.set("Elf","Legolas");
    lotr.set("Maiar","The Necromancer");
    lotr.set("Maiar","Sauron");
    lotr.set("RingBearer","Gollum");
    lotr.set("LadyOfLight","Galadriel");
    lotr.set("HalfElven","Arwen");
    lotr.set("Ent","Treebeard");

    // console.log(lotr.get("Maiar"));
    // console.log(lotr.get("Hobbit"));
    return lotr;
}

//console.log(main());


function rmDup(string){
    const hashedString = new HashMap();
    let finalString = [];
    for(let i = 0; i < string.length; i++){
        hashedString.set(string[i]);
        if(!finalString.includes(string[i])){
            finalString.push(string[i])
        }
    }

    return finalString.join("");

}

//console.log(rmDup('google'));

function palindrome(string){

}

//this is so close to being correct, but for some reason I cant figure out how to get the correct has values for the string to convert it to the same hash value... that or the program is already fixing the collision with open addressing and I can't figure out how to fix that!! ugh
function anagroup(arr){
    const anarr = new HashMap();
    for(let i = 0; i < arr.length; i++){
       // let hashedString = _hashString(arr[i]);
        anarr.set(arr[i], arr[i])
    }
    return anarr;

}

console.log(anagroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))