//const colorsArray = ["blue", "green", "white"];
//localStorage.setItem('colors', JSON.stringify(colorsArray));

//const numbersArray = [1, 2, 3];
//localStorage.setItem('numbers', JSON.stringify(numbersArray));

const colorsData =  JSON.parse(localStorage.getItem('colors'));
console.log(colorsData);

const numbersData =  JSON.parse(localStorage.getItem('numbers'));
console.log(numbersData);
