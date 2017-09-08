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
function create_button(parentNode,id,value){
    var element = document.createElement("input");
    document.createElement("input");
    element.setAttribute("type","button");
    element.setAttribute("id",id);
    element.setAttribute("value",value);
    element.onclick = buttonClickHandler;

    parentNode.appendChild(element);
    return element;
}
function create_function_button(parentNode,id,value,cb){
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
    "mul-1":"1",
    "mul-2":"2",
    "mul-3":"3",
    "mul-4":"4",
    "mul-5":"5",
    "mul-6":"6",
    "mul-7":"7",
    "mul-8":"8",
    "mul-9":"9",
    "mul-0":"0",
    "mul-*":"*"
};
for(var element_key in map){
    var parentNode;
    if(["mul-1","mul-2","mul-3","mul-4","mul-5"].includes(element_key)){
        parentNode = document.getElementById('number-pad-r1');
    }
    else if(["mul-6","mul-7","mul-8","mul-9","mul-0"].includes(element_key)){
        parentNode = document.getElementById('number-pad-r2');
    }
    else{
        parentNode = document.getElementById('number-pad-r3');
    }
    create_button(parentNode,element_key,map[element_key]);
}
var parentNode = document.getElementById('number-pad-r3');
create_function_button(parentNode,'mul-=',"=",resultClickHandler);
create_function_button(parentNode,'mul-clr',"清除",clearClickHandler);



