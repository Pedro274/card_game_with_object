import "./style/main.css";

const symbolsArr = ['&#9824;', '&#9827;', '&#9829;', '&#9830;'];
const numberArr = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', ];
let arr_to_sort = [];
const generateRandomNumber = arrLength => Math.floor(Math.random() * arrLength);


const generateObject = () => {
  const inputValue = +document.getElementById("amount").value;
  arr_to_sort = [];
  for (let i = 0; i < inputValue; i++) {
    const symbolToShow = symbolsArr[generateRandomNumber(symbolsArr.length)];
    const numberToShow = numberArr[generateRandomNumber(numberArr.length)];
    const idValue = (numberToShow === "A") ? 1 : (numberToShow === "J") ? 11 : (numberToShow === "Q") ? 12 : (numberToShow === "K") ? 13 : numberToShow
    const obj = {
      symbol: symbolToShow,
      number: numberToShow,
      id: idValue
    }
    arr_to_sort.push(obj);
  }
  console.log(arr_to_sort)
};
document.getElementById("draw").addEventListener("click", generateObject);



const bbSort = () => {
  var len = arr_to_sort.length - 1;
  for (let i = 0; i < len; i++) {
    for (let j = 0, stop = len - i; j < stop; j++) {
      if (arr_to_sort[j].id > arr_to_sort[j + 1].id) {
        let aux = arr_to_sort[j];
        arr_to_sort[j] = arr_to_sort[j + 1];
        arr_to_sort[j + 1] = aux;
      }
    }
  }
  console.log(arr_to_sort);
  return arr_to_sort;
}

const bubbleSort = () => {
  const arr = [...arr_to_sort]
  let wall = arr.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (arr[index].id > arr[index + 1].id) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
      //console.log(index);
    }
    wall--;
  }
  return arr;
};

const sort = () => {
  const result = arr_to_sort.sort((a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });

  console.log(result);
  return result;
}

document.getElementById("sort").onclick = bbSort;