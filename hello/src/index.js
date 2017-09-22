import createJsBaisc from './js_basic/hello';

function entries(){
    const root = document.createElement('div');
    root.innerHTML = '<p> <a href="src/html_element/html_element_category.html">HTML元素分类</a>'
                     +'</p><p><a href="src/html_element/html_element_attribute.html">HTML元素属性</a></p>'
                     +'<p><a href="src/html_text/html_text.html">HTML文本</a></p>'
                     +'<p><a href="src/html_image/html_image.html">HTML图片</a></p>'
                     +'<p><a href="src/css_demo/css.html">CSS</a></p>'
                     +'<p id="js_basic_entry"><a href="#js_basic">JS基础</a></p>'
                     +'<p><a href="src/calc/calc.html">计算器</a></p>';
    return root;
}
const root = entries();
document.body.appendChild(root);

const js_basic = document.getElementById("js_basic_entry");
js_basic.onclick = function(){
    root.innerHTML = createJsBaisc();
}
