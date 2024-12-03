const removeFromArray = function(initialArray, ...extras) {
    for (let extra of extras) {
        // Continuously remove all occurrences of the current extra
        let index = initialArray.indexOf(extra);
        while (index > -1) {
            initialArray.splice(index, 1); // Remove the found element
            index = initialArray.indexOf(extra); // Check again for the same element
        }
    }
    return initialArray;
};

// Do not edit below this line
module.exports = removeFromArray;
