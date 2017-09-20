//在标题栏显示hello
var myHeading = document.querySelector('#hello_title');
var old = myHeading.innerHTML;
myHeading.innerHTML=old+'<p>Hello!</p>';

//自定义函数
var helloDiv = document.querySelector('#hello_div');
helloDiv.innerHTML=hello();

function hello(){
    return 'hello';
}
//自定义函数2
function multiply(num1,num2){
    return num1*num2;
}
var mulDiv = document.querySelector('#mul_div');
var num1 = 1;
var num2 = 2;
mulDiv.innerHTML= num1 + '*'+num2 + '=' + multiply(num1,num2);

//点击事件
//document.querySelector('html').onclick = function() {
//    alert('Hello Event!');
//}
//点击按钮，显示数字
document.getElementById('1').onclick = function(){
    var result = document.getElementById('result');
    result.innerHTML = result.innerHTML+'1';
}
document.getElementById('2').onclick = function(){
    var result = document.getElementById('result');
    result.innerHTML = result.innerHTML+'2';
};
//简单的乘法器
var inputArray = [];

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
    appendResult(multiply(inputArray[0],inputArray[1]));
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
    "mul-*":{ parent:'number-pad-r3', value:'*' },
    "mul-=":{ parent:'number-pad-r3', value:'=', cb: resultClickHandler },
    "mul-clr":{ parent:'number-pad-r3',value:'清除', cb: clearClickHandler },
}
for(var  k  in map){
    var v = map[k];
    create_button(document.getElementById(v.parent),
                  k,
                  v.value,
                  v.cb || buttonClickHandler 
                 );
}



