let timerInterval;
 let initialSeconds; 
let seconds;
function StartGame(){
    let points=0;
    const mode = document.getElementById('mode').value;
    const color=document.getElementById('squareColor').value;
    let container = document.getElementById('settingsContainer');
            container.innerHTML = '';
   const timerDiv = document.createElement('div');
            timerDiv.id = 'timer';
            timerDiv.textContent = 'Time: ';
            container.appendChild(timerDiv);
    const score =document.createElement('div');
          score.id='score';
          score.textContent= ' Score 0 '
          container.appendChild(score);
    let GameField=document.createElement('div');
    GameField.id='GameField';
    document.body.appendChild(GameField);
    
    let square=document.createElement('div');
        square.id='square';
        square.style.backgroundColor=color;
        GameField.appendChild(square);
        let squareSize;
        let seconds ;
        switch(mode){
            case "EZ": initialSeconds=10;
            squareSize = 70;
            break;
            case "Mid": initialSeconds=5;
            squareSize = 40;
            break;
            case "Hard":initialSeconds=2;
            squareSize = 20;
            break;

        }
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        seconds = initialSeconds;
        timerDiv.textContent = `Time: ${seconds}`;
        const timerInterval = setInterval(() => {
            seconds--;
            timerDiv.textContent = `Time: ${seconds}`;
            if (seconds <= 0) {
                clearInterval(timerInterval); 
                square.remove(); 
                timerDiv.textContent = "Game Over! ";
            }

        }, 1000);
        square.addEventListener('click',()=>{
            seconds = initialSeconds;
            points=points+10;
             timerDiv.textContent = `Time: ${seconds}`;
             score.textContent=`Score: ${points}`
            const squareWidth = square.offsetWidth;
            const squareHeight = square.offsetHeight;
            const maxX = GameField.offsetWidth - squareWidth;
            const maxY = GameField.offsetHeight - squareHeight;
            const newX = Math.random() * (maxX-20);
            const newY = Math.random() * (maxY-20);

            square.style.left = newX + 'px';
            square.style.top = newY + 'px';


        }


        )
}