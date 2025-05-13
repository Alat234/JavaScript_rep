(function(window) {
    let LightsOutGame = {};
    LightsOutGame.matrix = [];
    LightsOutGame.target = 0;
    LightsOutGame.move = 0;
    LightsOutGame.CurrentJson = "";
    LightsOutGame.timer = 0;
    LightsOutGame.timerInterval = null;

    LightsOutGame.loadMatrices = async function (FileName) {
        try {
            const response = await fetch(FileName);
            if (!response.ok) {
                throw new Error('Не вдалося завантажити файл: ' + response.statusText);
            }
            const data = await response.json();
            const { matrix, target } = data;
            this.matrix = matrix;
            this.target = target;
            this.CurrentJson = FileName;
            this.move = 0;
            this.timer = 0;
            this.stopTimer();
            this.updateTimerDisplay();
            this.updateMoveDisplay();
        } catch (error) {
            console.error('Помилка:', error);
        }
    };

    LightsOutGame.GenerateField = function () {
        let field = document.getElementById("gameField");
        field.innerHTML = "";
        for (let i = 0; i < this.matrix.length; i++) {
            let row = document.createElement("div");
            row.className = "row";
            for (let j = 0; j < this.matrix[i].length; j++) {
                let cell = document.createElement("div");
                cell.onclick = () => this.ChangeColor(i, j); // Змінено на стрілкову функцію
                cell.className = "cell";
                cell.id = "cell" + i + j;
                if (this.matrix[i][j] === 1) {
                    cell.classList.add("on");
                }
                row.appendChild(cell);
            }
            field.appendChild(row);
        }
    };

    LightsOutGame.ChangeColor = function (i, j) {

        if (this.move === 0) {
            this.startTimer();
        }

        this.move = (this.move || 0) + 1;
        let currentmove = document.getElementById("Move");
        if (currentmove) {
            let text = currentmove.textContent;
            currentmove.textContent = text.replace(/\d+$/, this.move);
        }

        const directions = [
            [0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]
        ];

        let currentCell = document.getElementById("cell" + i + j);

        directions.forEach(([di, dj]) => {
            const newI = i + di;
            const newJ = j + dj;

            if (
                newI >= 0 && newI < this.matrix.length &&
                newJ >= 0 && newJ < this.matrix[0].length
            ) {
                this.matrix[newI][newJ] = 1 - this.matrix[newI][newJ];
                const cell = document.getElementById("cell" + newI + newJ);
                cell.classList.toggle("on", this.matrix[newI][newJ] === 1);
            }
        });

        this.CheckWin();
    };

    LightsOutGame.startTimer = function() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        this.timer = 0;
        this.timerInterval = setInterval(() => {
            this.timer++;
            this.updateTimerDisplay();
        }, 1000);
    };

    LightsOutGame.stopTimer = function() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    };

    LightsOutGame.updateTimerDisplay = function() {
        let timerDisplay = document.getElementById("Timer");
        if (timerDisplay) {
            let text = timerDisplay.textContent;
            timerDisplay.textContent = text.replace(/\d+$/, this.timer);
        }
    };

    LightsOutGame.updateMoveDisplay = function() {
        let moveContainer = document.getElementById("Move");
        if (moveContainer) {
            let text = moveContainer.textContent;
            moveContainer.textContent = text.replace(/\d+$/, this.move);
        }
    };

    LightsOutGame.CheckWin = function () {
        if (this.move > this.target) {
            this.stopTimer();
            alert(`Ви програли! Ви використали ${this.move} ходів, що більше за ціль (${this.target}). Час: ${this.timer} сек`);
            return;
        }

        let win = true;
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === 1) {
                    win = false;
                }
            }
        }

        if (win) {
            this.stopTimer();
            alert(`Ви виграли за ${this.move} ходів! Час: ${this.timer} сек`);
        }
    };

    LightsOutGame.StartNewGame = function () {
        const maps = ['FirstFiled.json', 'SecondField.json', 'ThirdField.json'];
        let newMap = this.CurrentJson;
        do {
            newMap = maps[Math.floor(Math.random() * maps.length)];
        } while (newMap === this.CurrentJson);
        this.loadMatrices(newMap).then(() => {
            this.GenerateField();
        });
    };

    LightsOutGame.restartGame = function() {
        this.move = 0;
        this.timer = 0;
        this.stopTimer();
        this.loadMatrices(this.CurrentJson).then(() => {
            this.GenerateField();
        });
        this.updateMoveDisplay();
        this.updateTimerDisplay();
    };

    window.LightsOutGame = LightsOutGame;
})(window);

LightsOutGame.loadMatrices("FirstFiled.json").then(() => {
    LightsOutGame.GenerateField();
});