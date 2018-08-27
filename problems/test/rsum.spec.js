/* global it describe */

const rsum = require('../problems/rsum');
const {expect} = require('chai');

describe('#rsum', () => {
  it('should return sum of operands', () => {
    expect(rsum(1)(2)(3)(4)()).to.equal(10);
    expect(rsum(1)(3)(3)(7)()).to.equal(14);

    expect(rsum(1)(0)(0)(0)()).to.equal(1);
    expect(rsum(0)(0)(0)(1)()).to.equal(1);
  });

  it('should return NaN', () => {
    expect(isNaN(
      rsum(['hello'])('lol, it`s even not a number')({})(143)()
    )).to.equal(true);
  });
});
