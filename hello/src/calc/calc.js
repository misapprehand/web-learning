import { multiply, add, sub, div } from '../math/math.js';
import * as input from './input';

//简单的乘法器
function appendResult(content){
    var result = document.getElementById('mul-result');
    result.innerHTML = result.innerHTML+content;
}
function clearResult(){
    var result = document.getElementById('mul-result');
    result.innerHTML = '';
}
function buttonClickHandler(event){
    var value = event.target.value;
    appendResult(value); 
}
function numberClickHandler(event){
    buttonClickHandler(event);
    var number = Number(event.target.value);
    input.inputAddNumber(number);
}
function resultClickHandler(event){
    buttonClickHandler(event);
    const [number1, number2 ] = input.inputGetOperand(); //ES6 let/const,解构
    const operator = input.inputGetOperator();

    if(operator === '*'){
        appendResult(multiply(number1,number2));
    }
    else if(operator === '+'){
        appendResult(add(number1,number2));
    }
    else if(operator === '-'){
        appendResult(sub(number1,number2));
    }
    else if(operator === '/'){
        appendResult(div(number1,number2));
    }
}
function clearClickHandler(event){
    buttonClickHandler(event);
    clearResult();
    input.inputClear();
}
function create_button({parentNode,id,value,cb=buttonClickHandler}){ //destructuring 改写函数参数
    var element = document.createElement("input");
    document.createElement("input");
    element.setAttribute("type","button");
    element.setAttribute("id",id);
    element.setAttribute("value",value);
    element.onclick = cb;

    parentNode.appendChild(element);
    return element;
}
function opClickHandler(event){
    var value = event.target.value;
    appendResult(value);
    input.inputAddOperator(value);
}
var map = {
    "mul-1":{ parent:'number-pad-r1', value:'1' },
    "mul-2":{ parent:'number-pad-r1', value:'2' },
    "mul-3":{ parent:'number-pad-r1', value:'3' },
    "mul-4":{ parent:'number-pad-r1', value:'4' },
    "mul-5":{ parent:'number-pad-r1', value:'5' },
    "mul-6":{ parent:'number-pad-r2', value:'6' },
    "mul-7":{ parent:'number-pad-r2', value:'7' },
    "mul-8":{ parent:'number-pad-r2', value:'8' },
    "mul-9":{ parent:'number-pad-r2', value:'9' },
    "mul-0":{ parent:'number-pad-r2', value:'0' },
    "mul-+":{ parent:'number-pad-r3', value:'+', cb:opClickHandler },
    "mul--":{ parent:'number-pad-r3', value:'-', cb:opClickHandler },
    "mul-*":{ parent:'number-pad-r3', value:'*', cb:opClickHandler },
    "mul-／":{ parent:'number-pad-r3', value:'/', cb:opClickHandler },
    "mul-=":{ parent:'number-pad-r3', value:'=', cb: resultClickHandler },
    "mul-clr":{ parent:'number-pad-r3',value:'清除', cb: clearClickHandler },
}
//使用 let/const and destructuring
function createCalc(){
    for(const  k  in map){
        const v = map[k];
        create_button({parentNode:document.getElementById(v.parent),
                       id:k,
                       value:v.value,
                       cb: v.cb || numberClickHandler
                      }
                     );
    }
}

function createPage(content){
  content.innerHTML = '<h2>简单乘法器</h2>'
  +'<div id="multiplier">'
  +'<div id="mul-result"></div>'
  +'<div id="number-pad-r1"></div>'
  +'<div id="number-pad-r2"></div>'
  +'<div id="number-pad-r3"></div>'
  +'</div>'
  ;
  createCalc();
}

export default createPage;
