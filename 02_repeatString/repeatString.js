const repeatString = function (myString, num) {
    let finalString = '';
    for(let i = 0; i < num; i++) {
        finalString += myString;
    }
    if (num < 0 ) {
        finalString = 'ERROR';
    } else if (myString == '') {
        finalString == "";
    }
    return finalString
  };
// Do not edit below this line
module.exports = repeatString;
