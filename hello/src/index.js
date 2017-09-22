
function entries(){
    const root = document.createElement('div');
    root.innerHTML = '<p> <a href="src/html_element/html_element_category.html">HTML元素分类</a> </p>';

    return root;
}
document.body.appendChild(entries());
