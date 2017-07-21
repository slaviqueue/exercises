const compose = (initialFn, ...fns) => (...args) => 
	fns.reduce((acc, fn) => fn(acc), initialFn(...args));

module.exports = compose;

