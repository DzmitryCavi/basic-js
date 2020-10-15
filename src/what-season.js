const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    try { date.getTime(); } catch (e) { throw e; }
    const month = date.getMonth()
    switch(true){
        case month < 2 || month === 11: return 'winter'
        case month < 5: return 'spring'
        case month < 8: return 'summer'
        default: return 'autumn'
    }
     

};
