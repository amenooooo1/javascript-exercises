const removeFromArray = function(array , ...manyArgs) {
    for (const arg of manyArgs){
        let found = array.indexOf(arg);
        if (found >  -1) array.splice(found, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
