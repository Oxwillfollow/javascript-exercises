const removeFromArray = function(arr, ...args) {
    if(args.length > 0){
        for (let i = arr.length-1; i >= 0; i--) {
            if(args.includes(arr[i])) arr.splice(i,1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
