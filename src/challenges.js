// Desafio 1 - Crie a função compareTrue
const compareTrue = (bool1, bool2) => (bool1 && bool2);

// Desafio 2 - Crie a função splitSentence
const splitSentence = (str) => str.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = (arr) => `${arr[arr.length - 1]}, ${arr[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 5 - Crie a função highestCount
const highestCount = (arr) => {
  let biggestN = -9999999;
  let counter;
  for (n of arr) {
    if (n > biggestN) {
      biggestN = n;
      counter = 1;
    } else if (n === biggestN) {
      counter += 1;
    }
  }
  return counter;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let distanceCat1;
  let distanceCat2;
  if (mouse > cat1) {
    distanceCat1 = mouse - cat1;
  } else {
    distanceCat1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    distanceCat2 = mouse - cat2;
  } else {
    distanceCat2 = cat2 - mouse;
  }
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
};

// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (arr) => {
  let res = [];
  for (let number of arr) {
    if (number % 15 === 0) {
      res.push('fizzBuzz');
    } else if (number % 3 === 0) {
      res.push('fizz');
    } else if (number % 5 === 0) {
      res.push('buzz');
    } else {
      res.push('bug!');
    }
  }
  return res;
};

// Desafio 9 - Crie a função encode e a função decode
const encode = (str) => {
  let strSplit = str.split('');
  let newString = '';
  for (let i = 0; i < strSplit.length; i += 1) {
    if (strSplit[i] === 'a') {
      newString += 1;
    } else if (strSplit[i] === 'e') {
      newString += 2;
    } else if (strSplit[i] === 'i') {
      newString += 3;
    } else if (strSplit[i] === 'o') {
      newString += 4;
    } else if (strSplit[i] === 'u') {
      newString += 5;
    } else {
      newString += strSplit[i];
    }
  };
  return newString;
 };

 const decode = (str) => {
  let strSplit = str.split('');
  let newString = '';
  for (let i = 0; i < strSplit.length; i += 1) {
    if (strSplit[i] === '1') {
      newString += 'a';
    } else if(strSplit[i] === '2') {
      newString += 'e';
    } else if(strSplit[i] === '3') {
      newString += 'i';
    } else if(strSplit[i] === '4') {
      newString += 'o';
    } else if(strSplit[i] === '5') {
      newString += 'u';
    } else {
      newString += strSplit[i];
    }
  };
  return newString;
 };

// Desafio 10 - Crie a função techList
const techList = (arr, str) => {
  let arrSort = arr.sort();
  let techName = [];
  if (typeof arr[0] !== 'undefined') {
    for (value of arrSort) {
      techName.push({
        tech: value,
        name: str
      })
    }
  }
  return techName;
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
