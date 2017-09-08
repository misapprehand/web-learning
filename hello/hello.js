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
    if( number ){
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
function create_button(id,value){
    var element = document.createElement("input");
    document.createElement("input");
    element.setAttribute("type","button");
    element.setAttribute("id",id);
    element.setAttribute("value",value);
    element.onclick = buttonClickHandler;

    document.getElementById('multiplier').appendChild(element);
    return element;
}
var map = {
    "mul-1":"1",
    "mul-2":"2",
    "mul-3":"3",
    "mul-4":"4",
    "mul-*":"*"
};
for(var element_key in map){
    create_button(element_key,map[element_key]);
}
document.getElementById('mul-=').onclick = resultClickHandler;
document.getElementById('mul-clr').onclick = clearClickHandler;


