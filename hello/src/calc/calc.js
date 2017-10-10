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
var map2 = {
    "mul-1":{ parent:'number-pad-r1', value:'1' },
    "mul-2":{ parent:'number-pad-r1', value:'2' },
    "mul-3":{ parent:'number-pad-r1', value:'3' },
    "mul-4":{ parent:'number-pad-r1', value:'4' },
    "mul-5":{ parent:'number-pad-r2', value:'5' },
    "mul-6":{ parent:'number-pad-r2', value:'6' },
    "mul-7":{ parent:'number-pad-r2', value:'7' },
    "mul-8":{ parent:'number-pad-r2', value:'8' },
    "mul-9":{ parent:'number-pad-r3', value:'9' },
    "mul-0":{ parent:'number-pad-r3', value:'0' },
    "mul-+":{ parent:'number-pad-r3', value:'+', cb:opClickHandler },
    "mul--":{ parent:'number-pad-r3', value:'-', cb:opClickHandler },
    "mul-*":{ parent:'number-pad-r4', value:'*', cb:opClickHandler },
    "mul-／":{ parent:'number-pad-r4', value:'/', cb:opClickHandler },
    "mul-=":{ parent:'number-pad-r4', value:'=', cb: resultClickHandler },
    "mul-clr":{ parent:'number-pad-r4',value:'清除', cb: clearClickHandler },
}

function createPad(container,infoMap){
    function getInfoFromMap({map,rowId}){
        const infos = [];
        for(let k of Object.keys(map)){
            const v = map[k];
            if(v.parent === rowId){
                infos.push(v);
            }
        }
        return infos;
    }
    let infos = getInfoFromMap({map:infoMap,rowId:"number-pad-r1"});
    container.appendChild(createButtonBar({infos:infos}));

    infos = getInfoFromMap({map:infoMap,rowId:"number-pad-r2"});
    container.appendChild(createButtonBar({infos:infos}));    

    infos = getInfoFromMap({map:infoMap,rowId:"number-pad-r3"});
    container.appendChild(createButtonBar({infos:infos}));    

    infos = getInfoFromMap({map:infoMap,rowId:"number-pad-r4"});
    container.appendChild(createButtonBar({infos:infos}));    
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

// <div class="dropdown">
// <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
// Dropdown
// <span class="caret"></span>
// </button>
// <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
// <li><a href="#">Action</a></li>
// <li><a href="#">Another action</a></li>
// <li><a href="#">Something else here</a></li>
// <li role="separator" class="divider"></li>
// <li><a href="#">Separated link</a></li>
// </ul>
// </div>
function createThemeSelect(parentNode){
    const element = document.createElement("div");
    element.setAttribute("class","dropdown");

    const button = createThemeSelect_button();
    element.appendChild(button);

    const items = createThemeSelect_items();
    element.appendChild(items);

    parentNode.appendChild(element);
}
function createThemeSelect_button(){
    const element = document.createElement("button");
    element.setAttribute("type","button");
    element.setAttribute("class","btn btn-default dropdown-toggle");
    element.setAttribute("data-toggle","dropdown");
    element.setAttribute("id","dropdownMenu1");
    element.setAttribute("aria-haspopup","true");
    element.setAttribute("aria-expanded","true");

    element.textContent = "选择主题";
    const caret = document.createElement("span");
    caret.setAttribute("class","caret");
    element.appendChild(caret);
    return element;
}
function createThemeSelect_items(){
    const element = document.createElement("ul");
    element.setAttribute("class","dropdown-menu");
    element.setAttribute("aria-labelledby","dropdownMenu1");

    let item_name = "主题1";
    let element_li = createThemeSelect_one_item({name:item_name});

    element.appendChild(element_li);

    item_name = "主题2";
    element_li = createThemeSelect_one_item({name:item_name});

    element.appendChild(element_li);
    return element;
}
function createThemeSelect_one_item({name}){
    const element_a = document.createElement("a");
    element_a.setAttribute("href","#");
    element_a.textContent = name;

    const element_li = document.createElement("li");
    element_li.appendChild(element_a);

    return element_li;
}
function createPage(content){
  content.innerHTML = '<h2>简单乘法器</h2>'
        +'<div id="multiplier">'
        +'<input id="mul-result" type="text" class="form-control" readonly />'
        +'</div>'
    ;

  const container = document.getElementById("multiplier");
  createThemeSelect(container);
  createPad(container,map);

  $('.dropdown-menu a').on('click',function(){
        $('.dropdown-toggle').html($(this).html()+'<span class="caret"></span>');
  });
}

export default createPage;
