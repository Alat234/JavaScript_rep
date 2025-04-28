function StartGame(){
    const mode = document.getElementById('mode').value;
    const color=document.getElementById('squareColor').value;
    let container = document.getElementById('settingsContainer');
            container.innerHTML = '';
   const timerDiv = document.createElement('div');
            timerDiv.id = 'timer';
            timerDiv.textContent = 'Time: ';
            container.appendChild(timerDiv);
    let GameField=document.createElement('div');
    GameField.id='GameField';
    document.body.appendChild(GameField);
    
    let square=document.createElement('div');
        square.id='square';
        square.style.backgroundColor=color;
        GameField.appendChild(square);

        let seconds ;
        switch(mode){
            case "EZ": seconds=10;
            break;
            case "Mid": seconds=5;
            break;
            case "Hard":seconds=1;
            break;

        }
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