var turn = 0;
var table = document.getElementById("mytable");
// Enter td O and X value this loop
        for (let i = 0; i < table.rows.length; i++) {
            for (let j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].addEventListener("click", function () {
                    addplayer(this);
                });
            }
        }                 
        

        //  Function add player cell check draw and winner show
        function addplayer(cell) {
            if (!cell.innerHTML) {
                var x = cell.innerHTML = turn % 2 === 0 ? "O" : "X";
                document.getElementById("playerShow").innerHTML = x + " Player";
                // console.log(x);
                turn++;
                // console.log(turn);
                if (turn >= 5) {
                    if (checkWinner()) {
                        var y = cell.innerHTML;
                        document.getElementById("playerShow").innerHTML = y + " Winner!";
                        alert(cell.innerHTML + " is the winner!");
                        resetGame();
                    } else if (turn === 9) {
                        alert("It's a draw!");
                        resetGame();
                    }
                }
                // console.log(cell);
            }
        }

        // check winner
        function checkWinner(){
            const positibityarray = [
                [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
            ];

            for (const combo of positibityarray) {
                const [a, b, c] = combo;
                const cells = table.getElementsByTagName('td');
                if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[b].innerText === cells[c].innerText) {
                    return true;
                }
                
            }
            return false;
        }

        //  Reset game
        function resetGame(){
            window.location.reload();
        }