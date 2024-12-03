const sumAll = function(start, end) {
    if(typeof start === 'number'
        && typeof end === 'number'
        && start % 1 == 0
        && end % 1 ==0)
    {
        if(start < 0 || end < 0)
            {
                return 'ERROR';
            }
            if(start > end)
            {
                let temp = start;
                start = end;
                end = temp;
            }
            let sum = 0;
            for(start; start <= end; start++)
                sum +=start;

            return sum;
    } else {
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = sumAll;
