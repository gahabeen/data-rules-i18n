/*!
  * data-rules-validator-i18n v0.0.1
  * (c) 2020 Gabin Desserprit
  * @license MIT
  */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function sentence(item) {
  if (typeof item === 'string') {
    return item[0].toUpperCase() + item.slice(1)
  }
  return item
}

function interpolate(message = '') {
  return (variables = {}) => {
    return sentence(Object.keys(variables).reduce((interpolated, variable) => interpolated.replace(`{${variable}}`, variables[variable]), message))
  }
}

var fr = {
  text: interpolate(`{label} n'est pas un texte.`),
  textMin: interpolate(`{label} doit contenir au moins {textMin} charactères.`),
  textMax: interpolate(`{label} doit contenir au maximum {textMax} charactères.`),
};

exports.fr = fr;
