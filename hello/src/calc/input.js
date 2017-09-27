let operator;
let first=0;
let second=0;
function addNumber(number){
    if(hasOperator()){
        second = second*10+number;
    }else{
        first = first*10+number;
    }
}
function hasOperator(){
    return operator;
}
function addOperator(op){
    operator = op;
}
function getOperand(){
    return [first,second];
}
function clear(){
    first =0;
    second=0;
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
