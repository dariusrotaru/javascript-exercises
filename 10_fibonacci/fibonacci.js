const fibonacci = function(a) {
    a = Number(a);
    if(a < 0){
        return "OOPS";
    } else if (a == 0) {
        return 0;
    }
    let fibbNumLast = 0; 
    let fibbNumNext = 1;
    for(let i = 1; i < a; i++){
        let temp = fibbNumNext; 
        fibbNumNext += fibbNumLast;
        fibbNumLast = temp;
    }
    return fibbNumNext;
};

// Do not edit below this line
module.exports = fibonacci;
