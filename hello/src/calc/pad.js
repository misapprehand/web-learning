function createPad (container, infoMap) {
  function getInfoFromMap ({map, rowId}) {
    const infos = [];
    for (let k of Object.keys(map)) {
      const v = map[k];
      if (v.parent === rowId) {
        infos.push(v);
      }
    }
    return infos;
  }
  let infos = getInfoFromMap({map: infoMap, rowId: 'number-pad-r1'});
  container.appendChild(createButtonBar({infos: infos}));

  infos = getInfoFromMap({map: infoMap, rowId: 'number-pad-r2'});
  container.appendChild(createButtonBar({infos: infos}));

  infos = getInfoFromMap({map: infoMap, rowId: 'number-pad-r3'});
  container.appendChild(createButtonBar({infos: infos}));

  infos = getInfoFromMap({map: infoMap, rowId: 'number-pad-r4'});
  container.appendChild(createButtonBar({infos: infos}));
}
function createButtonBarContainer () {
  const element = document.createElement('div');
  element.setAttribute('type', 'button');
  element.setAttribute('class', 'btn-group btn-group-justified calc-pad');
  element.setAttribute('role', 'group');
  return element;
}
function createButtonItemInGroup () {
  const element = document.createElement('div');
  element.setAttribute('class', 'btn-group');
  element.setAttribute('role', 'group');

  return element;
}
function createButtonInButtonBar ({info}) {
  const element = document.createElement('button');
  element.setAttribute('type', 'button');
  element.setAttribute('class', 'btn btn-default');
  element.setAttribute('value', info.value);
  element.textContent = info.value;
  element.onclick = info.cb;
  return element;
}
function createButtonBar ({infos}) {
  const element = createButtonBarContainer();
  for (let info of infos) {
    const lineItem = createButtonItemInGroup();
    const buttonItem = createButtonInButtonBar({info});
    lineItem.appendChild(buttonItem);
    element.appendChild(lineItem);
  }
  return element;
}
function clearPad (container) {
  let buttonBars = container.querySelectorAll('.calc-pad');
  buttonBars.forEach(it => {
    it.remove();
  });
}
function updatePad (container, map) {
  clearPad(container);
  createPad(container, map);
}
export {
    createPad,
    updatePad
};
