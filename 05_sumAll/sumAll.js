const sumAll = function(a, b) {
    if (a > 0 && b > 0 && typeof a === 'number' && typeof b === 'number'){
        let result = 0;
        let min = a < b ? a : b;
        let max = a > b ? a : b;
        for (let i = min; i <= max; i++) result += i; 
        return result;
    }
    else return 'ERROR';
    
};

// Do not edit below this line
module.exports = sumAll;
