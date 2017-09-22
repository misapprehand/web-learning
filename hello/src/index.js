
function entries(){
    const root = document.createElement('div');
    root.innerHTML = '<p> <a href="src/html_element/html_element_category.html">HTML元素分类</a>'
                     +'</p><p><a href="src/html_element/html_element_attribute.html">HTML元素属性</a></p>'
                     +'<p><a href="src/html_text/html_text.html">HTML文本</a></p>'
                     +'<p><a href="src/html_image/html_image.html">HTML图片</a></p>'
                     +'<p><a href="src/css_demo/css.html">CSS</a></p>'
                     +'<p><a href="src/js_basic/js_basic.html">JS基础</a></p>'
                     +'<p><a href="src/calc/calc.html">计算器</a></p>';
    return root;
}
document.body.appendChild(entries());
