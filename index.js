let player={
    name:'rituraj pal',
    bet:200,


}
let firstcard=getRandom();
let secondcard=getRandom();
let cards=[firstcard,secondcard];
let sum=firstcard+secondcard;
let hasBlackJack = false
let isAlive = false;
let message = "";
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById('sum-el');
let cardsEl=document.getElementById('cards-el');
let playerEl=document.getElementById('player-el');
playerEl.innerText=player.name + ": "+" " + "$" + player.bet;



function startgame(){
     isAlive = true
    // let firstCard = getRandom()
    // let secondCard = getRandom()
    // cards = [firstCard, secondCard]
    // sum = firstCard + secondCard
    rendergame()
}
function getRandom(){
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
 }



function rendergame(){
    if(sum<21){
    message="do you want to draw a new card ? ";
}
else if(sum===21){
   message="wow you have got a blackjack !!";
    hasBlackJack= true;
}
else{
    message="you are out of game ";
    isAlive=false;
}
messageEl.innerText=message;
sumEl.innerText="sum :" + sum;
cardsEl.innerText="cards: ";
for(let i=0;i<cards.length;i++){
    cardsEl.innerText += " " + cards[i] + " " ;
}
}
function startnew(){

   if (isAlive === true && hasBlackJack === false) {
        let card = getRandom()
        sum += card
        cards.push(card)
        rendergame()        
    }
}

