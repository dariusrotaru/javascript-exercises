const palindromes = function (string) {
    // Remove punctuation and spaces, then convert to lowercase
    string = string.replace(/[^a-z0-9]/gi, "").toLowerCase();
    // Reverse the string and check if it matches the original string
    let rev = string.split("").reverse().join("");
    return rev === string;
};

// Do not edit below this line
module.exports = palindromes;
