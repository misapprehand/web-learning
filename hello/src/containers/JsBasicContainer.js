import React, { Component } from 'react';
import Math from 'math/math';

class JsBasicContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
       result:""
    }
  }
  handleNumberClick=(name)=>{
      const prev = this.state.result;
      //Since setState is asynchronously
      //next is wrong
      //this.setState({ result: this.state.result+name})
      this.setState((preState,props)=>({
          result: preState.result+name}));
  }
  render () {
    const Mul = ({num1, num2}) => {
      return `${num1}+${num2}=${Math.multiply(num1, num2)}`;
    };

    return (
        <div>
            <h2 id='hello_title'>Hello 标题
                <p>Hello!</p>
            </h2>
            <h2>自定义函数</h2>
            <div id='hello_div' >hello</div>
            <h2>自定义函数2</h2>
            <div id='mul_div' >
                <Mul num1={1} num2={2} />
            </div>
            <h2>点按钮，显示数字</h2>
            <div id='number_btn_div'>
                <input type='button' id='1' value='1' onClick={()=>this.handleNumberClick('1')}/>
                <input type='button' id='2' value='2' onClick={()=>this.handleNumberClick('2')}/>
                <div id='result'>{this.state.result}</div>
            </div>
       </div>
    );
  }
}
export default JsBasicContainer;
