import React, { Component } from 'react';
import ThemeSelect from './calc/ThemeSelect';

class CalcContainer extends Component {
  render () {
    return (
      <div>
        <h2>简单乘法器</h2>
        <div id='multiplier'>
          <input id='mul-result' type='text' className='form-control' readOnly />
          <ThemeSelect
            themes={{a: '1', b: '2', c: '3'}}
            onSelect={(selectInfo) => console.log('selectInfo==' + selectInfo)} />
        </div>
      </div>
    );
  }
}
export default CalcContainer;
