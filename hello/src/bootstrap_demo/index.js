function addItem(parentNode,element){
    parentNode.appendChild(element);  
}
function createButtonItem({title,classes}){
    const element = document.createElement('button');
    element.setAttribute("type","button");
    element.setAttribute("class",classes);
    element.textContent=title;
    return element;
}
export default function createPage(content){
    content.innerHTML = '<h2>Bootstrap demo</h2>'
        +'<ul id="bs_demo_group">'
        +'</ul>';
    const group = document.getElementById("bs_demo_group");
    const element = createButtonItem({title:"按钮:默认风格", classes:"btn btn-default"});
    addItem(group,element);
}
