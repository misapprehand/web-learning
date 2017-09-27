var inputArray = [];
var operator;
function inputAddNumber(number){
    inputArray.push(number);
}
function inputAddOperator(op){
    operator = op;
}
function inputGetOperand(){
    return [inputArray[0],inputArray[1]];
}
function inputClear(){
    inputArray = [];
}
function inputGetOperator(){
    return operator;
}
export {
    inputAddNumber,
    inputAddOperator,
    inputGetOperand,
    inputGetOperator,
    inputClear
};
