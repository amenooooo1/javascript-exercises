const reverseString = function(s) {
    /*let chars = s.split();
    chars.reverse();
    let output = chars.join("").reverse().split("");*/
    return s.length > 0 ? s.split("").reverse().join("") : '';
};

// Do not edit below this line
module.exports = reverseString;
