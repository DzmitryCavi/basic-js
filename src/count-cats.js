const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const catsReducer = (ac,el) => {
    return ac + el.filter(el => el === '^^').length
  }
  return matrix.reduce(catsReducer,0)
};
