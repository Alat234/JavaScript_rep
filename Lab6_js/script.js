//1.Таймер
//2.Кількість ходів і мапа зчитана з Json
//3.зміна коліру квідрата на протилежний і всіх сусідніх квадратів також
//4. Копка для перезапуску та кнопка для початку нової гри з випадковою іншою мапо
(function(window) {
    let FieldCreation={};
    FieldCreation.matrix = [];
    FieldCreation.target = 0;
    FieldCreation.move = 0;
    FieldCreation.CurrentJson = "";

     FieldCreation.loadMatrices = async function (FileName) {
        try {

            const response = await fetch(FileName);


            if (!response.ok) {
                throw new Error('Не вдалося завантажити файл: ' + response.statusText);
            }


            const data = await response.json();

            const {matrix, target} = data;
            FieldCreation.matrix = matrix;
            FieldCreation.target = target;

        } catch (error) {

            console.error('Помилка:', error);
        }
    }
    window.FieldCreation = FieldCreation;
})(window);

FieldCreation.loadMatrices("FirstFiled.json")
