let x = 5

let wheelOfFortune = {
    desc:"",
    chance:35,
    name:"Wheel Of Fortune",
    imgpath:"wheeloffortune"
}
let theFool = {
    desc:"",
    chance:20,
    name:"The Fool",
    imgpath:"thefool"
}
let theHighPriestess = {
    desc:"",
    chance:10,
    name:"The High Priestess",
    imgpath:"thehighpriestess"
}
let theLovers = {
    desc:"",
    chance:7,
    name:"The Lovers",
    imgpath:"thelovers"
}
let theEmperor = {
    desc:"",
    chance:5,
    name:"The Emperor",
    imgpath:"theemperor"
}
let strength = {
    desc:"",
    chance:5,
    name:"Strength",
    imgpath:"strength"
}
let theHangedMan = {
    desc:"",
    chance:5,
    name:"The Hanged Man",
    imgpath:"thehangedman"
}
let death = {
    desc:"",
    chance:4,
    name:"Death",
    imgpath:"death"
}
let theSun = {
    desc:"",
    chance:3,
    name:"The Sun",
    imgpath:"thesun"
}
let theDevil = {
    desc:"",
    chance:1,
    name:"The Devil",
    imgpath:"thedevil"
}

let deck = [wheelOfFortune,theFool,theHighPriestess,theLovers,theEmperor,strength,theHangedMan,death,theSun,theDevil]
let deckIteration = 0
$(".cardname").text(deck[deckIteration].name)
$(".tcard").attr("src",`/img/${deck[deckIteration].imgpath}.jpg`)

// $(".tcard").attr("src",`/img/${deck[Math.floor(Math.random()*deck.length)].imgpath}.jpg`) // RANDOM CARD
console.log(deckIteration);
function deckMove(x){
    deckIteration += x
    if (deckIteration > deck.length-1) {
        deckIteration = 0
    } else if (deckIteration < 0) {
        deckIteration = deck.length-1
    }
    
    $(".tcard").attr("src",`/img/${deck[deckIteration].imgpath}.jpg`)
    $(".cardname").text(deck[deckIteration].name)
    console.log(deckIteration);
}