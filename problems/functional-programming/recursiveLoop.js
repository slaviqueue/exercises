const array = [1, 2, 3, 4, 5];

const each = (array, fn) => {
  const iterate = ([head, ...tail]) => head ? (fn(head), iterate(tail)) : null;
  return iterate(array);
};

each(array, e => console.log(e));