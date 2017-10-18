import React, { Component } from 'react';

class JsBasicContainer extends Component {
  render () {
    return (
      <div>
        <h2 id='hello_title'>Hello 标题</h2>
        <h2>自定义函数</h2>
        <div id='hello_div' />
        <h2>自定义函数2</h2>
        <div id='mul_div' />
        <h2>点按钮，显示数字</h2>
        <div id='number_btn_div'>
          <input type='button' id='1' value='1' />
          <input type='button' id='2' value='2' />
          <div id='result' />
        </div>
      </div>
    );
  }
}
export default JsBasicContainer;
