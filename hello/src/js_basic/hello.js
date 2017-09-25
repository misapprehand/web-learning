import { multiply } from '../math/math.js';

function createItems(node) {
    const root = node;
    root.innerHTML = '<h2 id="hello_title">Hello 标题</h2>' +
        '<h2>自定义函数</h2>' +
        '<div id="hello_div"></div>' +
        '<h2>自定义函数2</h2>' +
        '<div id="mul_div"></div>' +
        '<h2>点按钮，显示数字</h2>' +
        '<div id="number_btn_div">' +
        '<input type="button" id="1" value="1" />' +
        '<input type="button" id="2" value="2" />' +
        '<div id="result">' +
        '</div>' +
        '</div>';
    return root;
}

function createJsBasic(node) {
    const root = createItems(node);
    //在标题栏显示hello
    var myHeading = document.querySelector('#hello_title');
    var old = myHeading.innerHTML;
    myHeading.innerHTML = old + '<p>Hello!</p>';

    //自定义函数
    var helloDiv = document.querySelector('#hello_div');
    helloDiv.innerHTML = hello();

    function hello() {
        return 'hello';
    }
    //自定义函数2
    //function multiply(num1,num2){
    //    return num1*num2;
    //}
    var mulDiv = document.querySelector('#mul_div');
    var num1 = 1;
    var num2 = 2;
    mulDiv.innerHTML = num1 + '*' + num2 + '=' + multiply(num1, num2);

    //点击事件
    //document.querySelector('html').onclick = function() {
    //    alert('Hello Event!');
    //}
    //点击按钮，显示数字
    document.getElementById('1').onclick = function() {
        var result = document.getElementById('result');
        result.innerHTML = result.innerHTML + '1';
    }
    document.getElementById('2').onclick = function() {
        var result = document.getElementById('result');
        result.innerHTML = result.innerHTML + '2';
    };
}
export default createJsBasic;
