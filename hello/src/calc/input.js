var inputArray = [];
var operator;
function addNumber(number){
    inputArray.push(number);
}
function addOperator(op){
    operator = op;
}
function getOperand(){
    return [inputArray[0],inputArray[1]];
}
function clear(){
    inputArray = [];
}
function getOperator(){
    return operator;
}
export {
    addNumber,
    addOperator,
    getOperand,
    getOperator,
    clear
};
