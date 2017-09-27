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
test('input 1, 2,+,1,1,= and 输出 [12,11]',()=>{
    input.addNumber(1);
    input.addNumber(2);
    expect(input.getOperand()).toContain(12);
    input.addOperator('+');
    input.addNumber(1);
    input.addNumber(1);
    expect(input.getOperand()).toEqual([12,11]);
    input.clear();
})
