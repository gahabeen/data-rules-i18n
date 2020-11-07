/*!
  * data-rules-validator-i18n v0.0.1
  * (c) 2020 Gabin Desserprit
  * @license MIT
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DataRulesValidatorI18n = {}));
}(this, (function (exports) { 'use strict';

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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
