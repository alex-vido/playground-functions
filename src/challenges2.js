// Desafio 11 - Crie a função generatePhoneNumber
const generatePhoneNumber = (arr) => {
  let counter = {};
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0 || arr[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if ((typeof counter[arr[i]] === 'undefined')) {
      counter[arr[i]] = 1;
    } else {
      counter[arr[i]] += 1;
    }
    if (counter[arr[i]] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
  }
  }
  let telefoneArray = arr;
  telefoneArray.splice(0, 0,'(');
  telefoneArray.splice(3, 0,')');
  telefoneArray.splice(4, 0,' ');
  telefoneArray.splice(10, 0,'-');
  return telefoneArray.join('');
 };
// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA, lineB, lineC) => {
  if (
    (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB))
    || (lineA > (Math.abs(lineB - lineC))
      && lineB > (Math.abs(lineC - lineA))
      && lineC > (Math.abs(lineA - LineB)))
    ){
    return true;
  }
  return false;
}

// Desafio 13 - Crie a função hydrate
function hydrate(str) {
  let counter = 0;
  for (letter of str) {
    if(!isNaN(parseInt(letter, 10))) {
      counter += parseInt(letter, 10);
    }
  }
  if (counter === 1) {
    return `${counter} copo de água`;
  }
  return `${counter} copos de água`;
}

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
