const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  const isRule = s => ['--discard-next','--double-next','--discard-prev','--double-prev'].includes(s)

  if(!(arr instanceof Array)) throw Error
  const result = [...arr]
  let deleted = 0
  arr.map((el,i) => {
    switch(el){
      case '--discard-next': if(!isRule(result[i-deleted+1])) {result.splice(i-deleted+1,1);  deleted++}
      case '--double-next': if(!isRule(result[i-deleted+1])) result.splice(i-deleted+1,1,result[i-deleted+1])
      case '--discard-prev':if(result[i-deleted-1]) {result.splice(i-deleted-1,1); deleted ++}
      case '--double-prev': if(result[i-deleted-1]) result.splice(i-deleted-1,1,result[i-deleted-1])
    }
  })
  
 
  return result.filter(el => !isRule(el))
};

// --discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
// --discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
// --double-next удваивает следующий за ней элемент исходного массива в преобразованном массиве.
// --double-prev удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
