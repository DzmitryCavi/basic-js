const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return members instanceof Array ? members.filter( member => typeof member === 'string').map(member => [...member.trim()].shift().toUpperCase()).sort().join('') : false
};
