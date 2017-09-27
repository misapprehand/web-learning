import * as input from './input';

test('input 1 number and get 1',()=>{
    input.addNumber(1);
    expect(input.getOperand()).toContain(1);
})
