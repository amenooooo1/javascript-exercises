const repeatString = function(string, num) {
    if (num === 0) return '';
    if (num < 0) return 'ERROR';
    else {
        let output = string;
        for ( let i = 0; i < num - 1; i++) output += string;
    return output;
    }
    
    
};

// Do not edit below this line
module.exports = repeatString;
