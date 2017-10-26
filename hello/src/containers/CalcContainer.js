import React, { Component } from 'react';
import ThemeSelect from './calc/ThemeSelect';
import Pad from './calc/Pad';

const layouts = require('./calc/layouts.json');

class CalcContainer extends Component {
    createPad=()=> {
        const createMapFromLayout =({layout, callbacks})=> {
            const infoMap = new Map();
            const keys = Object.keys(layout);
            keys.forEach(key => {
                infoMap[key] = Object.assign({}, layout[key], {cb: callbacks[key].cb});
            });
            return infoMap;
        }
        const numberClickHandler=(event)=>{
            console.log('number click');
        };

        const jsonArray = layouts;
        const themes = {};
        const callbacks = {
            'mul-1': {cb: numberClickHandler},
            'mul-2': {cb: numberClickHandler},
            'mul-3': {cb: numberClickHandler},
            'mul-4': {cb: numberClickHandler},
            'mul-5': {cb: numberClickHandler},
            'mul-6': {cb: numberClickHandler},
            'mul-7': {cb: numberClickHandler},
            'mul-8': {cb: numberClickHandler},
            'mul-9': {cb: numberClickHandler},
            'mul-0': {cb: numberClickHandler},
            'mul-+': {cb: numberClickHandler},
            'mul--': {cb: numberClickHandler},
            'mul-*': {cb: numberClickHandler},
            'mul-／': {cb: numberClickHandler},
            'mul-=': {cb: numberClickHandler},
            'mul-clr': {cb: numberClickHandler}
        };

        for (let item of jsonArray) {
            themes[item.title] = createMapFromLayout({layout: item.content, callbacks});
        }

        return (<Pad key="111" infoMap={Object.values(themes)[0]} />);
    }
    render () {
    return (
      <div>
        <h2>简单乘法器</h2>
        <div id='multiplier'>
          <input id='mul-result' type='text' className='form-control' readOnly />
          <ThemeSelect
            themes={{a: '1', b: '2', c: '3'}}
              onSelect={(selectInfo) => console.log('selectInfo==' + selectInfo)} />
          {
              this.createPad()
          }
        </div>
      </div>
    );
  }
}
export default CalcContainer;
