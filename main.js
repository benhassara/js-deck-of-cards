showCards.onclick = function(){
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = "";
  displayCards();
  showCards.setAttribute('style', "display: none");
  var btnReset = document.getElementById("reset");
  btnReset.setAttribute('style', "visibility: visible");
  redeal.setAttribute('style', "visibility: visible");
};

reset.onclick = function() {
  var cardContainer = document.getElementById("container");
  cardContainer.innerHTML = "";
  reset.setAttribute('style', "visibility: hidden");
  redeal.setAttribute('style', "visibility: hidden");
  showCards.setAttribute('style', "display: block");
};

redeal.onclick = function() {
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = "";
  displayCards();
};

function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);

  for(var i=0; i < deck.length; i++){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";
  }
}

function newDeck() {
  var suits = ["c", "d", "h", "s"];
  var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
  var deck = [];
  for (var s = 0; s < suits.length; s++) {
    for (var r = 0; r < ranks.length; r++) {
      deck.push({card: ranks[r], suit: suits[s]});
    }
  }
  return deck;
}

function shuffleCards(deck) {
  var workArray = deck.slice(0); //shallow copy
  var shuffled = [];
  while (workArray.length > 0) {
    if (workArray.length === 1) {
      shuffled.push(workArray[0]);
      break;
    }
    else {
      var i = Math.floor(Math.random() * workArray.length);
      shuffled.push(workArray.splice(i, 1)[0]);
    }
  }
  return shuffled;
}

function inPlaceShuffle(htmlColl) {
  for (var i = htmlColl.length - 1; i >= 0; i--) {
    var tmp = htmlColl[i];
    console.log(tmp);
    var rand = Math.floor(Math.random * htmlColl.length);
    htmlColl[i] = htmlColl[rand];
    htmlColl[rand] = tmp;
  }
  return htmlColl;
}
