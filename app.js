let x = 5

let wheelOfFortune = {
    desc:"Take one shot",
    chance:35,
    name:"Wheel Of Fortune",
    imgpath:"wheeloffortune"
}
let theFool = {
    desc:"Dont drink anything",
    chance:20,
    name:"The Fool",
    imgpath:"thefool"
}
let theHighPriestess = {
    desc:"Take one shot, but next round take two",
    chance:10,
    name:"The High Priestess",
    imgpath:"thehighpriestess"
}
let theLovers = {
    desc:"Pick another person that drinks everytime you drink, on top of what they drink themselves. This lasts 2 rounds",
    chance:9,
    name:"The Lovers",
    imgpath:"thelovers"
}
let theEmperor = {
    desc:"Pick a person who takes one shot",
    chance:6,
    name:"The Emperor",
    imgpath:"theemperor"
}
let strength = {
    desc:"Skip the two next shots you was supposed to take",
    chance:6,
    name:"Strength",
    imgpath:"strength"
}
let theHangedMan = {
    desc:"Take no shots, but draw two cards next round",
    chance:6,
    name:"The Hanged Man",
    imgpath:"thehangedman"
}
let death = {
    desc:"Every player takes one shot",
    chance:4,
    name:"Death",
    imgpath:"death"
}
let theSun = {
    desc:"Do a game of rock paper scissors with the person on your right then left. When someone loses they take one shot",
    chance:3,
    name:"The Sun",
    imgpath:"thesun"
}
let theDevil = {
    desc:"Take four shots",
    chance:1,
    name:"The Devil",
    imgpath:"thedevil"
}

let deck = [wheelOfFortune,theFool,theHighPriestess,theLovers,theEmperor,strength,theHangedMan,death,theSun,theDevil]
let deckIteration = 0

$(".tcard").attr("src",`/img/${deck[deckIteration].imgpath}.jpg`)
$(".cardname").text(deck[deckIteration].name)
$(".desc").text(deck[deckIteration].desc)
$(".chance").text(deck[deckIteration].chance + "%")

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
    $(".desc").text(deck[deckIteration].desc)
    $(".chance").text("Chance: "+deck[deckIteration].chance + "%")



    console.log(deckIteration);
}

function draw() {
    let sum = 0;
    let rnd = Math.floor(Math.random()*100+1)
     
    switch (rnd) {
        case value <= 35:
            
            break;
        case value <= 55:
            
            break;
        case value <= 65:
            
            break;
        case value <= 74:
        
            break;
        case value <= 80:
        
            break;
        case value <= 86:
        
            break;
        case value <= 92:
        
            break;
        case value <= 96:
        
            break;
        case value <= 99:
        
            break;
        case value = 100:
        
            break;
        
        


        default:
            console.log("DEFAULT CASE: "+ rnd);
            break; // ETT STED HER FUNKER DEN IKKE FY FAEN
    }
}
