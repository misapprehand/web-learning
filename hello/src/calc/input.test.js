import * as input from './input';

test('input 1 number and get 1',()=>{
    input.addNumber(1);
    expect(input.getOperand()).toContain(1);
    input.clear();
})
test('input 1, 1 and get 11',()=>{
    input.addNumber(1);
    input.addNumber(1);
    expect(input.getOperand()).toContain(11);
    input.clear();
})
