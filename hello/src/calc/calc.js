import Input from './input';

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
function create_button({parentNode,id,value,cb=buttonClickHandler}){ //destructuring 改写函数参数
    var element = document.createElement("input");
    document.createElement("input");
    element.setAttribute("type","button");
    element.setAttribute("id",id);
    element.setAttribute("value",value);
    element.setAttribute("class","btn btn-default");
    element.onclick = cb;
    
    parentNode.appendChild(element);
    return element;
}
function opClickHandler(event){
    var value = event.target.value;
    appendResult(value);
    input.addOperator(value);
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
    "mul-clr":{ parent:'number-pad-r4',value:'清除', cb: clearClickHandler },
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
function createButtonBarContainer(){
    const element = document.createElement("div");
    element.setAttribute("type","button");
    element.setAttribute("class","btn-group btn-group-justified");
    element.setAttribute("role","group");

    return element;
}
function createButtonItemInGroup(){
    const element = document.createElement("div");
    element.setAttribute("class","btn-group");
    element.setAttribute("role","group");

    return element;
}
function createButtonInButtonBar({info}){
    const element = document.createElement("button");
    element.setAttribute("type","button");
    element.setAttribute("class","btn btn-default");
    element.setAttribute("value",info.value);
    element.textContent = info.value;
    element.onclick = info.cb || numberClickHandler;
    return element;
}
function createButtonBar({infos}){
    const element = createButtonBarContainer();
    for(let info of infos){
        const lineItem = createButtonItemInGroup();
        const buttonItem = createButtonInButtonBar({info});
        lineItem.appendChild(buttonItem);
        element.appendChild(lineItem);
    }
    return element;
}
function createPage(content){
  content.innerHTML = '<h2>简单乘法器</h2>'
        +'<div id="multiplier">'
        +'<input id="mul-result" type="text" class="form-control" readonly />'
        +'<div id="number-pad-r1"></div>'
        +'<div id="number-pad-r2"></div>'
        +'<div id="number-pad-r3"></div>'
        +'</div>'
  ;
//  createCalc();
  const container = document.getElementById("multiplier");
  function getTitleFromMap({map,rowId}){
      const titles = [];
      for(let k of Object.keys(map)){
          const v = map[k];
          if(v.parent === rowId){
              titles.push(v);
          }
      }
      return titles;
  }
  let titles = getTitleFromMap({map:map,rowId:"number-pad-r1"});
    container.appendChild(createButtonBar({infos:titles}));

  titles = getTitleFromMap({map:map,rowId:"number-pad-r2"});
    container.appendChild(createButtonBar({infos:titles}));    

  titles = getTitleFromMap({map:map,rowId:"number-pad-r3"});
    container.appendChild(createButtonBar({infos:titles}));    

  titles = getTitleFromMap({map:map,rowId:"number-pad-r4"});
    container.appendChild(createButtonBar({infos:titles}));    
}

export default createPage;
