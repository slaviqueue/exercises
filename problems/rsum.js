module.exports = (op) => {
  let res = 0;

  const iter = (a) => {
    const fin = !a && isNaN(a);

    res += a || 0;
    return fin ? res : iter;
  };

  return iter(op);
};
