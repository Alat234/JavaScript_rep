(function(window) {
    let SortArr = {};
    
   
    let comparisons = 0;
    let swaps = 0;
    let undefinedElements = 0;
    let lastSortType = "";

  
    function getValue(item) {
        if (item === null) return 0;
        return item;
    }

    
    SortArr.BubbleSort = function(arr, ascending = true) {
        comparisons = 0;
        swaps = 0;
        undefinedElements = 0;
        lastSortType = "BubbleSort";
        let tempArr = [...arr];

        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i] === undefined) {
                tempArr[i] = null;
                undefinedElements++;
            }
        }

        for (let i = 0; i < tempArr.length - 1; i++) {
            for (let j = 0; j < tempArr.length - i - 1; j++) {
                comparisons++;
                let left = getValue(tempArr[j]);
                let right = getValue(tempArr[j + 1]);
                let shouldSwap = false;
                if (ascending) {
                    if (left > right) shouldSwap = true;
                } else {
                    if (left < right) shouldSwap = true;
                }
                if (shouldSwap) {
                    let temp = tempArr[j];
                    tempArr[j] = tempArr[j + 1];
                    tempArr[j + 1] = temp;
                    swaps++;
                }
            }
        }
        return tempArr;
    };

   
    SortArr.SelectionSort = function(arr, ascending = true) {
        comparisons = 0;
        swaps = 0;
        undefinedElements = 0;
        lastSortType = "SelectionSort";
        let tempArr = [...arr];

        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i] === undefined) {
                tempArr[i] = null;
                undefinedElements++;
            }
        }

        for (let i = 0; i < tempArr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < tempArr.length; j++) {
                comparisons++;
                let current = getValue(tempArr[j]);
                let min = getValue(tempArr[minIndex]);
                if (ascending) {
                    if (current < min) minIndex = j;
                } else {
                    if (current > min) minIndex = j;
                }
            }
            if (minIndex !== i) {
                let temp = tempArr[i];
                tempArr[i] = tempArr[minIndex];
                tempArr[minIndex] = temp;
                swaps++;
            }
        }
        return tempArr;
    };

   
    SortArr.InsertionSort = function(arr, ascending = true) {
        comparisons = 0;
        swaps = 0;
        undefinedElements = 0;
        lastSortType = "InsertionSort";
        let tempArr = [...arr];

        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i] === undefined) {
                tempArr[i] = null;
                undefinedElements++;
            }
        }

        for (let i = 1; i < tempArr.length; i++) {
            let key = tempArr[i];
            let j = i - 1;
            while (j >= 0) {
                comparisons++;
                let current = getValue(tempArr[j]);
                let keyValue = getValue(key);
                if (ascending) {
                    if (current <= keyValue) break;
                } else {
                    if (current >= keyValue) break;
                }
                tempArr[j + 1] = tempArr[j];
                swaps++;
                j--;
            }
            tempArr[j + 1] = key;
        }
        return tempArr;
    };

  
    SortArr.ShellSort = function(arr, ascending = true) {
        comparisons = 0;
        swaps = 0;
        undefinedElements = 0;
        lastSortType = "ShellSort";
        let tempArr = [...arr];

        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i] === undefined) {
                tempArr[i] = null;
                undefinedElements++;
            }
        }

        let n = tempArr.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = tempArr[i];
                let j = i;
                while (j >= gap) {
                    comparisons++;
                    let current = getValue(tempArr[j - gap]);
                    let tempValue = getValue(temp);
                    if (ascending) {
                        if (current <= tempValue) break;
                    } else {
                        if (current >= tempValue) break;
                    }
                    tempArr[j] = tempArr[j - gap];
                    swaps++;
                    j -= gap;
                }
                tempArr[j] = temp;
            }
        }
        return tempArr;
    };

   
    SortArr.QuickSort = function(arr, ascending = true) {
        comparisons = 0;
        swaps = 0;
        undefinedElements = 0;
        lastSortType = "QuickSort";
        let tempArr = [...arr];

        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i] === undefined) {
                tempArr[i] = null;
                undefinedElements++;
            }
        }

        function partition(low, high) {
            let pivot = getValue(tempArr[high]);
            let i = low - 1;
            for (let j = low; j < high; j++) {
                comparisons++;
                let current = getValue(tempArr[j]);
                let shouldSwap = false;
                if (ascending) {
                    if (current <= pivot) shouldSwap = true;
                } else {
                    if (current >= pivot) shouldSwap = true;
                }
                if (shouldSwap) {
                    i++;
                    let temp = tempArr[i];
                    tempArr[i] = tempArr[j];
                    tempArr[j] = temp;
                    swaps++;
                }
            }
            let temp = tempArr[i + 1];
            tempArr[i + 1] = tempArr[high];
            tempArr[high] = temp;
            swaps++;
            return i + 1;
        }

        function quickSortHelper(low, high) {
            if (low < high) {
                let pi = partition(low, high);
                quickSortHelper(low, pi - 1);
                quickSortHelper(pi + 1, high);
            }
        }

        quickSortHelper(0, tempArr.length - 1);
        return tempArr;
    };

 
    SortArr.SortInfo = function() {
        if (lastSortType === "") {
            return "Сортування ще не виконувалось.";
        }
        return `${lastSortType}: порівнянь - ${comparisons}, обмінів - ${swaps}, undefined-елементів - ${undefinedElements}`;
    };

    window.SortArr = SortArr;
})(window);

let arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
arr[10] = undefined;
arr[50] = undefined;
arr[90] = undefined;

console.log("Початковий масив:", arr);

let bubbleSorted = window.SortArr.BubbleSort(arr, true);
console.log("Bubble Sort:", bubbleSorted);
console.log(window.SortArr.SortInfo());

let selectionSorted = window.SortArr.SelectionSort(arr, true);
console.log("Selection Sort:", selectionSorted);
console.log(window.SortArr.SortInfo());

let insertionSorted = window.SortArr.InsertionSort(arr, true);
console.log("Insertion Sort:", insertionSorted);
console.log(window.SortArr.SortInfo());

let shellSorted = window.SortArr.ShellSort(arr, true);
console.log("Shell Sort:", shellSorted);
console.log(window.SortArr.SortInfo());

let quickSorted = window.SortArr.QuickSort(arr, true);
console.log("Quick Sort:", quickSorted);
console.log(window.SortArr.SortInfo());
