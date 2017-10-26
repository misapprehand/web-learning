import React, { Component } from 'react';
import ThemeSelect from './calc/ThemeSelect';
import Pad from './calc/Pad';
import Input from './calc/input';

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
        const appendResult =(content)=> {
            let result = document.getElementById('mul-result');
            result.value += content;
        }
        const clearResult= ()=> {
            let result = document.getElementById('mul-result');
            result.value = '';
        }
        const buttonClickHandler=(event)=> {
            const value = event.target.value;
            appendResult(value);
        }
        const input = new Input({clearCallback:clearResult});

        const numberClickHandler=(event)=>{
            let number = Number(event.target.value);
            input.addNumber(number);
            buttonClickHandler(event);
        };
        const resultClickHandler=(event)=>{
            if (input.isEnd()) {
                clearResult();
                return;
            }
            buttonClickHandler(event);
            input.end();
            appendResult(input.getResult());
        }
        const clearClickHandler=(event)=> {
            buttonClickHandler(event);
            clearResult();
        }
        const opClickHandler=(event)=>{
            const value = event.target.value;
            appendResult(value);
            input.addOperator(value);
        }

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
            'mul-+': {cb: opClickHandler},
            'mul--': {cb: opClickHandler},
            'mul-*': {cb: opClickHandler},
            'mul-／': {cb: opClickHandler},
            'mul-=': {cb: resultClickHandler},
            'mul-clr': {cb: clearClickHandler}
        };

        for (let item of jsonArray) {
            themes[item.title] = createMapFromLayout({layout: item.content, callbacks});
        }

        return (<Pad infoMap={Object.values(themes)[0]} />);
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
