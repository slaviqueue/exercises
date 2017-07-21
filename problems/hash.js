module.exports = function(object, str) {
  const hashArray = str.split('.');

  switch (hashArray.length) {
    case 0:
      return null;

    case 1:
      return object[hashArray[0]];

    default:
      return hashArray.reduce((prev, cur) => {
        const first = typeof prev === 'string';

        if(!prev || (!object[prev] && first))
          return undefined;

        return first ? object[prev][cur] : prev[cur];
      });
  }
};
