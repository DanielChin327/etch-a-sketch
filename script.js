// DOMContentLoaded waits for HTML to load first so that JS doesn't break.

console.log("HELLEO")
document.addEventListener("DOMContentLoaded", function(){

  console.log("Hello WORLD")
})
function createBoard(size){
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for(let i = 0; i < numDivs; i++){
    let div = document.createElement("div");
    div.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", div);
  }
};
