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
var map = {
    "mul-1":{ parent:'number-pad-r1', value:'1', cb:numberClickHandler  },
    "mul-2":{ parent:'number-pad-r1', value:'2', cb:numberClickHandler  },
    "mul-3":{ parent:'number-pad-r1', value:'3', cb:numberClickHandler  },
    "mul-4":{ parent:'number-pad-r1', value:'4', cb:numberClickHandler  },
    "mul-5":{ parent:'number-pad-r1', value:'5', cb:numberClickHandler  },
    "mul-6":{ parent:'number-pad-r2', value:'6', cb:numberClickHandler  },
    "mul-7":{ parent:'number-pad-r2', value:'7', cb:numberClickHandler  },
    "mul-8":{ parent:'number-pad-r2', value:'8', cb:numberClickHandler  },
    "mul-9":{ parent:'number-pad-r2', value:'9', cb:numberClickHandler  },
    "mul-0":{ parent:'number-pad-r2', value:'0', cb:numberClickHandler  },
    "mul-+":{ parent:'number-pad-r3', value:'+', cb:opClickHandler },
    "mul--":{ parent:'number-pad-r3', value:'-', cb:opClickHandler },
    "mul-*":{ parent:'number-pad-r3', value:'*', cb:opClickHandler },
    "mul-／":{ parent:'number-pad-r3', value:'/', cb:opClickHandler },
    "mul-=":{ parent:'number-pad-r3', value:'=', cb: resultClickHandler },
    "mul-clr":{ parent:'number-pad-r4',value:'清除', cb: clearClickHandler },
}
var map2 = {
    "mul-1":{ parent:'number-pad-r1', value:'1', cb:numberClickHandler },
    "mul-2":{ parent:'number-pad-r1', value:'2', cb:numberClickHandler  },
    "mul-3":{ parent:'number-pad-r1', value:'3', cb:numberClickHandler  },
    "mul-4":{ parent:'number-pad-r1', value:'4', cb:numberClickHandler  },
    "mul-5":{ parent:'number-pad-r2', value:'5', cb:numberClickHandler  },
    "mul-6":{ parent:'number-pad-r2', value:'6', cb:numberClickHandler  },
    "mul-7":{ parent:'number-pad-r2', value:'7', cb:numberClickHandler  },
    "mul-8":{ parent:'number-pad-r2', value:'8', cb:numberClickHandler  },
    "mul-9":{ parent:'number-pad-r3', value:'9', cb:numberClickHandler  },
    "mul-0":{ parent:'number-pad-r3', value:'0', cb:numberClickHandler  },
    "mul-+":{ parent:'number-pad-r3', value:'+', cb:opClickHandler },
    "mul--":{ parent:'number-pad-r3', value:'-', cb:opClickHandler },
    "mul-*":{ parent:'number-pad-r4', value:'*', cb:opClickHandler },
    "mul-／":{ parent:'number-pad-r4', value:'/', cb:opClickHandler },
    "mul-=":{ parent:'number-pad-r4', value:'=', cb: resultClickHandler },
    "mul-clr":{ parent:'number-pad-r4',value:'清除', cb: clearClickHandler },
}
const themes = {
    "主题1": map,
    "主题2": map2
}
function createPage(content){
  content.innerHTML = '<h2>简单乘法器</h2>'
        +'<div id="multiplier">'
        +'<input id="mul-result" type="text" class="form-control" readonly />'
        +'</div>'
    ;

  const container = document.getElementById("multiplier");
  createThemeSelect({parentNode:container,onSelect:(select)=>updatePad(container,themes[select])});
  createPad(container,map);
}

export default createPage;
