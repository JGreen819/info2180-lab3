

document.addEventListener("DOMContentLoaded", function() {

    /*grabs all the board elements(div id = board) and stores them in board*/
    const board = document.getElementById("board"); 


    /*Gets all div elements inside the board and stores them in "square"*/
    const square = board.getElementsByTagName("div"); 

    for (let x = 0; x < square.length; x++) {
        square[x].classList.add("square"); /*To each divs and set the class to square*/
    
}

});

/*
squares.addEventListener("click", function () {
    square.textContent = "X";

    Element.classList.add("X");



})
currentPlayer = 'X';

otherPlayer = 'Y';

square.addEventListener

const grid = new Array(9);


*/




