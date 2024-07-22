'use strict';
const diffTypesArray =  [1, true, 'ololo', null, { prop: 20 }, 50, 5, undefined, '123', function(){ }, 10];

function  getArithMean (array){
    // Filter numbers to the new array
    const numArray = [];
    for (const item of array){
        const isNumber = function (value){
            return typeof value === 'number';
            }
        if (isNumber(item) === true){
            numArray.push(item); 
        }
    }

    // Defining of sum of numbers
    let numSum = 0;
    for (const item of numArray){
        numSum += item;
    }

    // Defining arithmetic mean
    const arithMean = numSum / numArray.length;

    return arithMean;
}

const result = getArithMean(diffTypesArray);
console.log('Arithmetic mean is equal to ' + result);