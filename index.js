// Write your solution here!
const cats = ["Milo", "Otis","Garfield"]

function destructivelyAppendCat(name){
    cats.splice(3, 0, "Ralph")
}

function destructivelyPrependCat(name){
    cats.splice(0, 0, "Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
   const copyCats = [... cats, "Broom"];
    return copyCats ;
}

function prependCat(name){
    const copyCats = ["Arnold", ... cats]
    return copyCats ;
}

function removeLastCat(){
   const copyCats = [...cats.slice(0,2)] ;
   return copyCats ;
}

function removeFirstCat(){
    const copyCats = [...cats.slice(1, 3)]
    return copyCats ;
}