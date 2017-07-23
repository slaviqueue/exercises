module.exports = function(object, str) {
  const hashArray = str.split('.');

  switch (hashArray.length) {
             
    case 0:
      return undefined; 

    case 1:
      return object[hashArray[0]];
    
    default:
      return hashArray.reduce((acc, cur) => acc ? acc[cur] : undefined, object);
  }
};
