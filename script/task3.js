'use strict';
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = (obj) => {
    let result = 0;
    for(let value of Object.values(obj)) {
        result += value;
    }
    return result;
};
console.log(sum(salaries));