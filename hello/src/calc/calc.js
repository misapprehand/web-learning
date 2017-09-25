import { multiply, add } from '../math/math.js';
//简单的乘法器
var inputArray = [];
var operator;

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
    var number = Number(value);
    if( number || number === 0){
        inputArray.push(number);
    }
    appendResult(value); 
}
function resultClickHandler(event){
    buttonClickHandler(event);
    if(operator === '*'){
        appendResult(multiply(inputArray[0],inputArray[1]));
    }
    else if(operator === '+'){
        appendResult(add(inputArray[0],inputArray[1]));
    }
}
function clearClickHandler(event){
    buttonClickHandler(event);
    clearResult();
    inputArray =[];
}
function create_button(parentNode,id,value,cb=buttonClickHandler){
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
    operator = value;
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
    "mul-*":{ parent:'number-pad-r3', value:'*', cb:opClickHandler },
    "mul-+":{ parent:'number-pad-r3', value:'+', cb:opClickHandler },
    "mul-=":{ parent:'number-pad-r3', value:'=', cb: resultClickHandler },
    "mul-clr":{ parent:'number-pad-r3',value:'清除', cb: clearClickHandler },
}
function createCalc(){
    for(var  k  in map){
        var v = map[k];
        create_button(document.getElementById(v.parent),
                      k,
                      v.value,
                      v.cb || buttonClickHandler 
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
