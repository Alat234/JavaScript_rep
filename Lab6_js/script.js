//1.Таймер
//2.Кількість ходів і мапа зчитана з Json
//3.зміна коліру квідрата на протилежний і всіх сусідніх квадратів також
//4. Копка для перезапуску та кнопка для початку нової гри з випадковою іншою мапо
(function(window) {
    let LightsOutGame={};
    LightsOutGame.matrix =[];
    LightsOutGame.target =0;
    let move = 0;
    let CurrentJson = "";

    LightsOutGame.loadMatrices = async function (FileName) {
        try {

            const response = await fetch(FileName);


            if (!response.ok) {
                throw new Error('Не вдалося завантажити файл: ' + response.statusText);
            }


            const data = await response.json();

            const {matrix, target} = data;
            this.matrix = matrix;
            this.target= target;

        } catch (error) {

            console.error('Помилка:', error);
        }
    }
    LightsOutGame.GenerateField = function () {
        let field = document.getElementById("gameField");
        field.innerHTML = "";
        for (let i = 0; i <  this.matrix.length; i++) {
            let row = document.createElement("div");
            row.className = "row";
            for (let j = 0; j <  this.matrix.length; j++) {
                let cell = document.createElement("div");

                cell.onclick = function () {}
                cell.className = "cell";
                cell.id = "cell" + i + j;
                if (this.matrix[i][j] === 1) {
                    cell.classList.add("on");
                }
                row.appendChild(cell);
            }
            field.appendChild(row);
        }
    }











    window.LightsOutGame = LightsOutGame;

})(window);


LightsOutGame.loadMatrices("FirstFiled.json").then(() =>{
    LightsOutGame.GenerateField();

});

