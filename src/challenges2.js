// Desafio 11 - Crie a função generatePhoneNumber

// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate
function hydrate(str) {
  let counter = 0
  for (letter of str) {
    if(!isNaN(parseInt(letter, 10))) {
      counter += parseInt(letter)
    }
  }
  return `${counter} copos de água`
}

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
