// DOMContentLoaded waits for HTML to load first so that JS doesn't break.
let color = "black";
let click = "false";

document.addEventListener("DOMContentLoaded", function(){
  createBoard(32);

  document.querySelector("body").addEventListener("click", function(e){
    if (e.target.tagName != "BUTTON"){
      click = !click;
      let draw = document.querySelector("#draw");
      if(click) {
        draw.innerHTML = "Draw Toggle: On"
      }
      else{
        draw.innerHTML = "Draw Toggle: Off"
      }
    }
  })
  let btnPopUp = document.querySelector("#pop-up");
  btnPopUp.addEventListener("click", function(){
    let size = getSize();
    createBoard(size);
  })
})

function createBoard(size){
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for(let i = 0; i < numDivs; i++){
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv)
    board.insertAdjacentElement("beforeend", div);
  }
};

function getSize(){
  let input = prompt("Give me grid size")
  let message = document.querySelector("#message");
  if(input == "") {
    message.innerHTML = "Provide a number."
  }
  else if (input < 0 || input > 100) {
    message.innerHTML = "Provide a number between 1 to 100"
  }
  else {
    message.innerHTML = "You are ready to draw!"
    return input;
  }
}

function colorDiv(){
  if(click) {
    if(color == "random"){
      this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
    }
    else{
      this.style.backgroundColor = 'black';
    }
  }
}

function setColor(colorChoice){
  color = colorChoice;
}

function resetBoard(){
  let divs = document.querySelectorAll("div")
  divs.forEach((div) => div.style.backgroundColor = "white")
}
