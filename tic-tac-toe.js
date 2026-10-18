
//Exercise 1
document.addEventListener("DOMContentLoaded", function() {

    /*grabs all the board elements(div id = board) and stores them in board*/
    const board = document.getElementById("board"); 


    /*Gets all div elements inside the board and stores them in "square"*/
    const square = board.getElementsByTagName("div"); 

    let currentPlayer = 'X';
    let grid = new Array(9); //create an array with 9 spaces

    const status = document.getElementById('status'); //grabs status divs and stores them in status
    let gameOver = false; //keep track of game status

    const win_pos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]; //win positions for row, diagonals, and columns

    //Exercise 4 - function to check whether X or O is the winner
    function checkWinner() {
        for (let pos of win_pos) {
            const [num1, num2, num3] = pos;

            if (
                grid[num1] && grid[num1] === grid[num2] && grid[num1] === grid[num3]
            ) {
                const winner = grid[num1];
                status.textContent = `Congratulations! ${winner} is the Winner!`; 
                status.classList.add("you-won");
                gameOver = true;
                return true;
            }
        }
        return false;
    }


    for (let x = 0; x < square.length; x++) {
        square[x].classList.add("square"); /*To each divs and set the class to square*/


        //Exercise 3 - to add mouse hover effect
        square[x].addEventListener("mouseover", function() {
            square[x].classList.add('hover');
        });

        //Exercise 3 - To remove effect when mouse leaves
         square[x].addEventListener("mouseout", function() {
            square[x].classList.remove('hover');
        });

         
        square[x].addEventListener("click", function() {
            if (grid[x]) {   //if value already in slot - disallow from overwriting (Exercise 6)
                return;
            } 

            square[x].textContent = currentPlayer;


            square[x].classList.add(currentPlayer);
            grid[x] = currentPlayer;
            checkWinner(); //function call checkWinner

            if (currentPlayer === 'X') {
                currentPlayer = 'O';
            } else {
                currentPlayer = 'X';
            }
          

        });
    
    

}   //For loop ends here 

    const newGamebtn = document.querySelector(".btn");


    //Exercise 5
    newGamebtn.addEventListener("click",  () => {
        for (let x = 0; x < square.length; x++) {
            square[x].textContent = '';
            square[x].classList.remove('X', 'O');

            grid.fill(null); //reset array positions to null 
            status.classList.remove("you-won");
            status.textContent = "Move your mouse over a square and click to play an X or an O.";
            currentPlayer = 'X';
            gameOver = false;

         }
        

    });




});
