function addItem (parentNode, element) {
  parentNode.appendChild(element);
}
function createButtonItem ({title, classes}) {
  const element = document.createElement('button');
  element.setAttribute('type', 'button');
  element.setAttribute('class', classes);
  element.textContent = title;
  return element;
}
function createReadOnlyInputItem () {
  const element = document.createElement('input');
  element.setAttribute('type', 'text');
  element.setAttribute('class', 'form-control');
  element.setAttribute('readonly', '');
  element.setAttribute('placeholder', '只读输入显示');

  return element;
}
export default function createPage (content) {
  content.innerHTML = '<h2>Bootstrap demo</h2>' +
        '<ul id="bs_demo_group">' +
        '</ul>';
  const group = document.getElementById('bs_demo_group');
  let element = createButtonItem({title: '按钮:默认风格', classes: 'btn btn-default'});
  addItem(group, element);
  element = createReadOnlyInputItem();
  addItem(group, element);
}
