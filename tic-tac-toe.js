
//Exercise 1
document.addEventListener("DOMContentLoaded", function() {

    /*grabs all the board elements(div id = board) and stores them in board*/
    const board = document.getElementById("board"); 


    /*Gets all div elements inside the board and stores them in "square"*/
    const square = board.getElementsByTagName("div"); 

    let currentPlayer = 'X';
    const grid = new Array(9);


    for (let x = 0; x < square.length; x++) {
        square[x].classList.add("square"); /*To each divs and set the class to square*/


        square[x].addEventListener("mouseover", function() {
            square
        }

        square[x].addEventListener("click", function() {
            square[x].textContent = currentPlayer;
            square[x].classList.add(currentPlayer);
            grid[x] = currentPlayer;

            if (currentPlayer === 'X') {
                currentPlayer = 'O';
            } else {
                currentPlayer = 'X';
            }
          

        });
    
}

});
