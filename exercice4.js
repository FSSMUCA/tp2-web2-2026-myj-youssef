let zero = 0;
let one = 1;
let NaN_value = Number("hello");
let nullValue = null;
let chaineVide = "";
let chaineZero = "0";
let chaineOne = "1";
let falseValue = false;
let undefinedValue;
let value = " \t\n ";

let firstTable = [zero, zero, zero, chaineVide, nullValue, nullValue, NaN_value, one, value];
let secondTable = [chaineVide, chaineZero, falseValue, falseValue, undefinedValue, falseValue, NaN_value, chaineOne, zero];

let resTwoEqual;
let resThreeZEqual;

let i, j;

for(i=0, j=0; i<firstTable.length && j<secondTable.length; i++, j++) {
    if (firstTable[i] == secondTable[j]) {
        resTwoEqual=true;
    }
    else {
        resTwoEqual=false
    }
    if (firstTable[i] === secondTable[j]) {
        resThreeZEqual=true;
    }
    else {
        resThreeZEqual=false;
    }

    if (typeof(firstTable[i])==="string") {
        console.log("\"", firstTable[i], "\"", " == ", secondTable[j],"         -> ", resTwoEqual,"    |   \"", firstTable[i], " \" === ", secondTable[j], "         -> ", resThreeZEqual);
    }
    else if (secondTable[j]==="string") {
        console.log(`${firstTable[i]} == \" ${secondTable[j]} \"         -> ${resTwoEqual}    |   ${firstTable[i]} === \" ${secondTable[j]} \"         -> ${resThreeZEqual}`);
    }
    else {
        console.log(`${firstTable[i]} == ${secondTable[j]}         -> ${resTwoEqual}    |   ${firstTable[i]} === ${secondTable[j]}         -> ${resThreeZEqual}`);
    }
}