const expect = require('chai').expect;
const compose = require('../../problems/functional-programming/compose');

describe('compose(...functions)', () => {
	it('should pipe args through functions', () => {
	  const multiplyThenPowerThenSqrt = compose(
			(a, b)	=> a * b,
			res	=> res * res,
			powered => Math.sqrt(powered)
		); 
		
		expect(multiplyThenPowerThenSqrt(1, 2)).to.equal(2);
	})

  it('should pipe args through functions', () => {
    const createPerson = (name, age) => ({ name: name, age: age, hired: true });
    
    const employees = [
      createPerson('Jack', 19),
      createPerson('Andrew', 22),
      createPerson('Sabu', 23)
    ];

    //We could do it using only single filter, but this is proof of concept.
    const fireEmployesYoungerThanTwenty = compose(
      employees => employees.map(employee => employee.age < 20 ? { ...employee, fired: true } : employee),
      employees => employees.filter(employee => !employee.fired)
    );

    expect(JSON.stringify(fireEmployesYoungerThanTwenty(employees))).to.equal(JSON.stringify([
      createPerson('Andrew', 22),  
      createPerson('Sabu', 23)
    ]));
  })  
});

