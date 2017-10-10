import Input from './input';
import createThemeSelect from './themeSelect';
import {createPad,updatePad} from './pad';

const input = new Input({clearCallback:clearResult});
//简单的乘法器
function appendResult(content){
    var result = document.getElementById('mul-result');
    result.value += content;
}
function clearResult(){
    var result = document.getElementById('mul-result');
    result.value='';
}
function buttonClickHandler(event){
    var value = event.target.value;
    appendResult(value); 
}
function numberClickHandler(event){
    var number = Number(event.target.value);
    input.addNumber(number);
    buttonClickHandler(event);
}
function resultClickHandler(event){
    if(input.isEnd()){
        clearResult();
        return;
    }
    buttonClickHandler(event);
    input.end();
    appendResult(input.getResult());
}
function clearClickHandler(event){
    buttonClickHandler(event);
    clearResult();
}
function opClickHandler(event){
    var value = event.target.value;
    appendResult(value);
    input.addOperator(value);
}
var layout1 = {
    "mul-1":{ "parent":"number-pad-r1", "value":"1"},
    "mul-2":{ "parent":"number-pad-r1", "value":"2"},
    "mul-3":{ "parent":"number-pad-r1", "value":"3"},
    "mul-4":{ "parent":"number-pad-r1", "value":"4"},
    "mul-5":{ "parent":"number-pad-r1", "value":"5"},
    "mul-6":{ "parent":"number-pad-r2", "value":"6"},
    "mul-7":{ "parent":"number-pad-r2", "value":"7"},
    "mul-8":{ "parent":"number-pad-r2", "value":"8"},
    "mul-9":{ "parent":"number-pad-r2", "value":"9"},
    "mul-0":{ "parent":"number-pad-r2", "value":"0"},
    "mul-+":{ "parent":"number-pad-r3", "value":"+"},
    "mul--":{ "parent":"number-pad-r3", "value":"-"},
    "mul-*":{ "parent":"number-pad-r3", "value":"*"},
    "mul-／":{ "parent":"number-pad-r3", "value":"/"},
    "mul-=":{ "parent":"number-pad-r3", "value":"="},
    "mul-clr":{ "parent":"number-pad-r4","value":"清除"},
}
var layout2 = {
    "mul-1":{ "parent":"number-pad-r1", "value":"1"},
    "mul-2":{ "parent":"number-pad-r1", "value":"2"},
    "mul-3":{ "parent":"number-pad-r1", "value":"3"},
    "mul-4":{ "parent":"number-pad-r1", "value":"4"},
    "mul-5":{ "parent":"number-pad-r2", "value":"5"},
    "mul-6":{ "parent":"number-pad-r2", "value":"6"},
    "mul-7":{ "parent":"number-pad-r2", "value":"7"},
    "mul-8":{ "parent":"number-pad-r2", "value":"8"},
    "mul-9":{ "parent":"number-pad-r3", "value":"9"},
    "mul-0":{ "parent":"number-pad-r3", "value":"0"},
    "mul-+":{ "parent":"number-pad-r3", "value":"+"},
    "mul--":{ "parent":"number-pad-r3", "value":"-"},
    "mul-*":{ "parent":"number-pad-r4", "value":"*"},
    "mul-／":{ "parent":"number-pad-r4", "value":"/"},
    "mul-=":{ "parent":"number-pad-r4", "value":"="},
    "mul-clr":{ "parent":"number-pad-r4","value":"清除"},
}

var callbacks = {
    "mul-1":{cb:numberClickHandler},
    "mul-2":{cb:numberClickHandler},
    "mul-3":{cb:numberClickHandler},
    "mul-4":{cb:numberClickHandler},
    "mul-5":{cb:numberClickHandler},
    "mul-6":{cb:numberClickHandler},
    "mul-7":{cb:numberClickHandler},
    "mul-8":{cb:numberClickHandler},
    "mul-9":{cb:numberClickHandler},
    "mul-0":{cb:numberClickHandler},
    "mul-+":{cb:opClickHandler},
    "mul--":{cb:opClickHandler},
    "mul-*":{cb:opClickHandler},
    "mul-／":{cb:opClickHandler},
    "mul-=":{ cb: resultClickHandler},
    "mul-clr":{ cb: clearClickHandler},
}
function createMapFromLayout({layout,callbacks}){
    const infoMap = new Map();
    let keys = Object.keys(layout);
    keys.forEach(key=>{
        infoMap[key] = Object.assign({},layout[key],{cb:callbacks[key].cb});           
    })
    return infoMap;
}

const themes = {
    "主题1": createMapFromLayout({layout:layout1,callbacks}),
    "主题2": createMapFromLayout({layout:layout2,callbacks}),
}
function createPage(content){
  content.innerHTML = '<h2>简单乘法器</h2>'
        +'<div id="multiplier">'
        +'<input id="mul-result" type="text" class="form-control" readonly />'
        +'</div>'
    ;

  const container = document.getElementById("multiplier");
  createThemeSelect({parentNode:container,onSelect:(select)=>updatePad(container,themes[select])});
  createPad(container,themes["主题1"]);
}

export default createPage;
