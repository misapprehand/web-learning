import * as input from './input';

test('input 1 number and get 1',()=>{
    input.inputAddNumber(1);
    expect(input.inputGetOperand()).toContain(1);
})
