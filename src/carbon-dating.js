const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    return (typeof sampleActivity === "string") && (+sampleActivity>1) && (+sampleActivity < MODERN_ACTIVITY)  ? Math.floor(Math.log(MODERN_ACTIVITY / (+sampleActivity || 1))/(0.69311/HALF_LIFE_PERIOD)) : false
};
