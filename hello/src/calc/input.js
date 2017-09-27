class Input{
    constructor(arg){//构造函数
        this.operator = "";
        this.first = 0;
        this.second = 0;
        this.endFlag = false;
    }
    addNumber(number){
        if(this.endFlag){
            this.clear();
        }
        if(this.hasOperator()){
            this.second = this.second*10+number;
        }else{
            this.first = this.first*10+number;
        }
    }
    hasOperator(){
        return this.operator;
    }
    addOperator(op){
        if(this.endFlag){
            this.clear();
        }
        this.operator = op;
    }
    getOperand(){
        return [this.first,this.second];
    }
    clear(){
        this.first =0;
        this.second=0;
        this.operator="";
        this.endFlag = false;
    }
    getOperator(){
        return this.operator;
    }
    end(){
        this.endFlag = true;
    }
}
export default Input;
