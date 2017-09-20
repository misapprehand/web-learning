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
//function multiply(num1,num2){
//    return num1*num2;
//}
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
