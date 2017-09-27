let operator;
let first=0;
let second=0;
let endFlag = false;
function addNumber(number){
    if(endFlag){
        clear();
    }
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
    if(endFlag){
        clear();
    }
    operator = op;
}
function getOperand(){
    return [first,second];
}
function clear(){
    first =0;
    second=0;
    operator="";
    endFlag = false;
}
function getOperator(){
    return operator;
}
function end(){
    endFlag = true;
}
export {
    addNumber,
    addOperator,
    getOperand,
    getOperator,
    clear,
    end
};
