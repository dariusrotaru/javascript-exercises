const reverseString = function(myString) {
    let splitString = myString.split("");
    let reverseArray = splitString.reverse();
    let joinedArray = reverseArray.join("");
    return joinedArray;
};

// Do not edit below this line
module.exports = reverseString;
