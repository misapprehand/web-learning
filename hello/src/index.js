import createJsBaisc from './js_basic/hello';
import createCalc from './calc/calc';

function entries(){
    const root = document.createElement('div');
    root.innerHTML = '<div class="main__sidebar">'
                     +'<div>'
                     +'<p> <a href="src/html_element/html_element_category.html">HTML元素分类</a>'
                     +'</p><p><a href="src/html_element/html_element_attribute.html">HTML元素属性</a></p>'
                     +'<p><a href="src/html_text/html_text.html">HTML文本</a></p>'
                     +'<p><a href="src/html_image/html_image.html">HTML图片</a></p>'
                     +'<p><a href="src/css_demo/css.html">CSS</a></p>'
                     +'<p id="js_basic_entry"><a href="#js_basic">JS基础</a></p>'
                     +'<p id="calc_entry"><a href="#calc">计算器</a></p>'
                     +"</div>"
                     +'<div id="content"></div>'
                     +'</div>'
    ;
    return root;
}
const root = entries();
document.body.appendChild(root);

const content = document.getElementById("content");
const js_basic = document.getElementById("js_basic_entry");
js_basic.onclick = function(){
     createJsBaisc(content);
}
const calc = document.getElementById("calc_entry");
calc.onclick = function(){
    createCalc(content);
}
