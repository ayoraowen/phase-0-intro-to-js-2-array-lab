// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const catsCopy=[...cats, "Broom"]
    return catsCopy
}

function prependCat(name){
    const catsCopy=["Arnold", ...cats]
    return catsCopy
}

function removeLastCat(){
    const catsCopy=cats.slice(0,-1)
    return catsCopy
}

function removeFirstCat(){
    const catsCopy=cats.slice(1)
    return catsCopy
}