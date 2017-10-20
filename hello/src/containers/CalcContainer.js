import React, { Component } from 'react';

class CalcContainer extends Component {
  render () {
    return (
      <div>CalcContainer
        <h2>简单乘法器</h2>
        <div id='multiplier'>
          <input id='mul-result' type='text' className='form-control' readonly />
        </div>
      </div>
    );
  }
}
export default CalcContainer;
