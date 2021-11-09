const calculator = require('./calculator')
//test case 1 
test('string with a single number should result in the number itself', () => {
    expect(calculator.add('1')).toBe(1);
  });

  //test case 2

  test('string with two numbers separated by comma should result in the sum of the numbers',
   () => {
    expect(calculator.add('10,5.5')).toBe(15.5);
  });

  //test case 3
  test('string with three numbers separated by comma should result in the sum of the numbers',
   () => {
    expect(calculator.add('2,8,2')).toBe(12);
});
 
// test case 4
test('string with four numbers separated by comma should result in the sum of the numbers',
 () => {
    expect(calculator.add('2,0,4,5')).toBe(11);
});

// test case 5
test('string with - numbers separated by comma should result in the sum of the numbers',
()=>{
  expect(calculator.add('-10,7')).toBe(-15);
})
